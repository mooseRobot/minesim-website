import mongoose, { mongo } from 'mongoose';
import 'dotenv/config';
import { promises as fs } from 'fs';
import data from './output/topPlayers.json' assert { type: 'json' };
import { Client, Events, GatewayIntentBits } from 'discord.js'

// connect to db
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true, 
    useUnifiedTopology: true }
);

const db = mongoose.connection;

// Confirm connection to db
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: "500:Connection to server failed." });
    } else {
        console.log("Successfully connected to MongoDB.")
    };
});


// Connect to discord
const { token } = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    client.user.setActivity('/mine', { type: 'PLAYING' });
});

// Log in to discord
client.login(token);

const userSchema = new mongoose.Schema({
    User: String,

    data: {
        last_update: Date,
        depth: Number,
        balance: Number,
        value: Number,
        patreon: Number,
        bank: Number,
        clan: String,
        'clan invites': [String],

        daily: {
            streak: Number,
            'last claim': Date
        },

        rebirths: Number,
        stars: Number,
        multiplier: Number,

        ores: {
            Coal: Number,
            Iron: Number,
            Copper: Number,
            Gold: Number,
            Lapis: Number,
            Diamond: Number,
            Emerald: Number
        },

        town: {
            workers: Number
        },

        minecart: String,
        equipped: String,

        pickaxe: {
            Fists: Boolean,
            'Wooden pickaxe': Boolean,
            'Iron pickaxe': Boolean,
            'Steel pickaxe': Boolean,
            'Fiberglass pickaxe': Boolean,
            'Gold pickaxe': Boolean,
            'Diamond pickaxe': Boolean,
            'Obsidian pickaxe': Boolean,
            'Patreon pickaxe': Boolean,
            'Osmium pickaxe': Boolean,
            'Netherite pickaxe': Boolean,
            'Supreme pickaxe': Boolean,
            'Lam Axe': Boolean,
            'Cookie Pickaxe': Boolean,
            'Supporter pickaxe': Boolean
        },

        stargrades: {
            'drill count': Number,
            'drill upgrade': Number
        },

        stocks: {
            Trades: Number,
            Coal: {
                Shares: Number,
                'Total Cost': Number
            },
            Iron: {
                Shares: Number,
                'Total Cost': Number
            },
            Copper: {
                Shares: Number,
                'Total Cost': Number
            },
            Gold: {
                Shares: Number,
                'Total Cost': Number
            },
            Lapis: {
                Shares: Number,
                'Total Cost': Number
            },
            Diamond: {
                Shares: Number,
                'Total Cost': Number
            },
            Emerald: {
                Shares: Number,
                'Total Cost': Number
            }
        },

        lifetime: {
            ores: Number,
            balance: Number,
            earnings: Number,
            'market gains': Number
        }
    }
});

const User = mongoose.model('User', userSchema, 'users');

function getPlayerIdAndStats () {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        let user = {};
        // Initial info
        user.username = data[i].username
        user.avatarURL = data[i].avatarURL
        user.id = data[i].User
        user.wealth = data[i].totalWealth
        user.balance = data[i].data.balance
        user.bank = data[i].data.bank
        user.rebirths = data[i].data.rebirths
        user.clan = data[i].data.clan

        // More info
        user.stars = data[i].data.stars
        user.multiplier = data[i].data.multiplier
        user.workers = data[i].data.town.workers
        user.lifetime = {}
        user.lifetime.balance = data[i].data.lifetime.balance
        user.lifetime.earnings = data[i].data.lifetime.earnings
        user.lifetime.market_gains = data[i].data.lifetime["market gains"]
        arr.push(user)
    };
    return arr
};


async function fetchTopPlayers() {
    const topPlayerPipeline = [
        {
            $addFields: {
                "totalWealth": {
                    $add: ["$data.balance", "$data.bank"]
                }
            }
        },
        {
            $sort: { "totalWealth": -1 }
        },
        {
            $limit: 25
        }
    ];

    try {
        const results = await User.aggregate(topPlayerPipeline).exec();
        const augmentedResults = [];
        for (let player of results) {
            const user = await client.users.fetch(player.User);  // Assuming player.User contains the Discord user ID
            player.username = user.username;
            player.avatarURL = user.displayAvatarURL({ format: 'png', dynamic: true });
            augmentedResults.push(player);
        };

        return augmentedResults;

    } catch (err) {
        console.log('Error occurred:', err);
        return null;
    }
}

async function saveToJSONFile(data, filename) {
    await fs.writeFile(filename, JSON.stringify(data, null, 4));
    console.log('Updated players leaderboard')
    
}

async function updateTopPlayers() {
    const sortedUsers = await fetchTopPlayers();
    await saveToJSONFile(sortedUsers, './output/topPlayers.json');
}

// Call the function immediately upon start
updateTopPlayers();

// Set an interval to call the function every hour
setInterval(updateTopPlayers, 3600000);

export { getPlayerIdAndStats }
