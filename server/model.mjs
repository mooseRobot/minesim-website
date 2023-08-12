import mongoose, { mongo } from 'mongoose';
import 'dotenv/config';
import { promises as fs } from 'fs';
import data from './output/topPlayers.json' assert { type: 'json' };

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
        return results;
    } catch (err) {
        console.log('Error occurred:', err);
        return null;
    }
}

async function saveToJSONFile(data, filename) {
    await fs.writeFile(filename, JSON.stringify(data, null, 4));
}


// Call function
// (async () => {
//     const sortedUsers = await fetchTopPlayers();
//     await saveToJSONFile(sortedUsers, './output/topPlayers.json');
// })();

// (async () => {
//     const sortedUsers = await fetchTopPlayers();
//     await console.log(sortedUsers);
// })();

function getPlayerIdAndBalance () {
    const arr = [];
    let user = {};
    for (let i = 0; i < data.length; i++) {
        // Initial info
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

// let player = {}

// player.lifetime = {}
// player.lifetime.market_gains = data[0].data.lifetime["market gains"]

// console.log(player)

console.log(getPlayerIdAndBalance()[0])


