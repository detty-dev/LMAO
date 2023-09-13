import {ethers} from "hardhat";

async function main(){

      const lmaoAddr= "0xdb660f0D6667f38ce18cB3bB536DBB2699c23140";
   
    const  tokenB= await ethers.deployContract("WrappedLmao", [lmaoAddr]);  

    await tokenB.waitForDeployment();
    console.log(`Deploy ${tokenB.target}`)
}
async function main1(){

       const wlmaoAddr = "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af"
    const depositWlmao = await ethers.getContractAt("IReceiver", wlmaoAddr);
    console.log(` ${await depositWlmao.deposit(100)}`);

    const withdrawWLmao = await ethers.getContractAt("IReceiver", wlmaoAddr);
    console.log(` ${await withdrawWLmao.withdraw(92)}`);

}

main1().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
