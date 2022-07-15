const { ethers } = require('hardhat')

const main = async () => {
    const nomadsFactory = await ethers.getContractFactory('NomadsERC721')
    const NomadsContract = await nomadsFactory.deploy()

    console.log('NOMADS CONTRACT ADDRESS:', NomadsContract.address)
}

main()
    .then(() => process.exit(0)
    .catch(error => {
        console.log('Error in deploting Contract >> ', error)
        process.exit(1)
    })
    )