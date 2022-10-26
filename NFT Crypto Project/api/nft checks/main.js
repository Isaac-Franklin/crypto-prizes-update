let access = 'https://eth-mainnet.g.alchemy.com/nft/v2/{A3Rd7TR2_kQf9knuYGlOtZhfBdiYhB_i}/getNFTs'

const action = () => {
    fetch(access)
        .then((res) => res.json())
        .then((res) => console.log(res))
}
action()