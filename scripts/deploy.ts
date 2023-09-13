import { ethers } from "hardhat";


  async function main() {
      const lmaoAddr= "0xdb660f0D6667f38ce18cB3bB536DBB2699c23140";
      const wlmaoAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    const deployerAddr = "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af"
    const [account, account1, account2] = await ethers.getSigners();    
    const  lmao = await ethers.deployContract("LMAO", [], {
    });

    await  lmao .waitForDeployment();
    console.log(`Deploy ${lmao.target}`)

    const Lmao = await ethers.getContractAt("Ilmao", lmaoAddr);
    await Lmao.mint()
  

    const  tokenB= await ethers.deployContract("WrappedLmao", [lmaoAddr]);  

    await tokenB.waitForDeployment();
    console.log(`Deploy ${tokenB.target}`)

    const wLmao = await ethers.getContractAt("IERC20", lmaoAddr);
    console.log(` ${await wLmao.transferFrom(account.address, account1.address, 200)}`);

    const depositWlmao = await ethers.getContractAt("IReceive", wlmaoAddr);
    console.log(` ${await depositWlmao.deposit(200)}`);

    const withdrawWLmao = await ethers.getContractAt("IReceive", wlmaoAddr);
    console.log(` ${await withdrawWLmao.withdraw( 200)}`);


   const signer =  account.address;
    console.log(`Deployer address ${signer}`)
  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
