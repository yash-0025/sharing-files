import { useMoralisWeb3Api } from "react-moralis"

const Web3Api = useMoralisWeb3Api()
const fetchNFTsForContract = async () => {
  const options = {
    chain: "mumbai",
    token_address: "0x81Aa717907A2F2e1386eAbD0CA92F2bBb1BF18b3",
    limit: 50,
    // token_address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
  }
  const getNFTs = await Web3Api.account.getNFTsForContract(options)
  console.log(getNFTs)
}

export default fetchNFTsForContract
