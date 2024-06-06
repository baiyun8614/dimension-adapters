import {Adapter, FetchResultVolume} from "../../adapters/types"
import {CHAIN} from "../../helpers/chains";
import fetchURL from "../../utils/fetchURL";


const fetch = async (timestamp: number): Promise<FetchResultVolume> => {
    let res = (await fetchURL('https://icp.dmail.ai/api/node/v6/dmail/statistics/daily_txn_on_bsc_from_dmail_token_contact'));
    return {
        dailyVolume: `${res.data.daily_txn_on_bsc_from_dmail_token_contact}`,
        // totalVolume: `${totalVolume}`,
        timestamp
    }
};


const adapter: Adapter = {
    adapter: {
        [CHAIN.BSC]: {
            fetch: fetch,
            start: 1705363200,
        },
    }
};

export default adapter;
