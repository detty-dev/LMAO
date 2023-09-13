import { ethers } from "hardhat";


  async function main() {
    const deployerAddr = "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af"
    const lmaoAddr= "0xdb660f0D6667f38ce18cB3bB536DBB2699c23140";

    const [account, account1, account2] = await ethers.getSigners();
    const signer = account;
     const signerAddr =  account.address;
    console.log(`Deployer address ${signer}`)

    
    const  lmao = await ethers.deployContract("LMAO", [], {
    });
    await  lmao .waitForDeployment();
    console.log(`Deploy ${lmao.target}`)

    const interactWithLmao = await ethers.getContractAt("LMAO", lmaoAddr);
    
            // MINT LMAO
    const MINT = await interactWithLmao.mint()     
    
            //APPROVE LMAO
    const approveLmao = await interactWithLmao.approve(signerAddr, 20);
             
            //BALANCE OF LMAO
    const lmaoBalance = await interactWithLmao.connect(account).balanceOf(signerAddr);

            //TRANSFER LMAO
    const transferLmao = await interactWithLmao.connect(account).transfer(signerAddr, 100);
  }
        console.log (
            "approveLmao",
            "lmaoBalance",
            "transferLmao"
        )

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });