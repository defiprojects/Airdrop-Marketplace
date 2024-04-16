import DashboardLayout from "@/components/dashboard/layout";
import AirdropsSignup from "./airdrop-signup";
import { Typography } from "@/components/ui/typography";
import { Mint } from "./mint";
import { Stake } from "./stake";
import { Unstake } from "./unstake";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Input } from "@/components/ui/input";

import { useAuth } from "@/context/authContext";

export default function AirdropHunterPage() {
  const { currentUserData } = useAuth();
  const [userWalletBalance, setUserWalletBalance] = useState(0); // This should be fetched from the contract [TODO]
  const [stakedBalance, setStakedBalance] = useState(0); // This should be fetched from the contract [TODO]

  console.log(currentUserData);

  return (
    <DashboardLayout>
      <div className=" space-y-6 py-6 text-center md:space-y-12">
        <Typography variant="h2">
          Stake Morph to Access Airdrop Hunter
        </Typography>
        <Typography variant="smallTitle">
          Airdrop Hunter offers you a gateway to the newest airdrops in the
          cryptocurrency realm.
        </Typography>

        {/* <div className="flex flex-col items-start justify-center ">
          <Typography variant="h3">1. Mint Morph Token</Typography>
          <Typography variant="h3">2. Stake Your Tokens</Typography>
          <Typography variant="h3">3. Access Airdrop Hunter</Typography>
        </div> */}

        <Tabs
          defaultValue="stake"
          className="bg-gradient items-start rounded-xl lg:mx-auto lg:w-9/12"
        >
          <TabsList className="border-1 w-full">
            <TabsTrigger value="mint">Mint</TabsTrigger>
            <TabsTrigger value="stake">Stake</TabsTrigger>
            <TabsTrigger value="unstake">Unstake</TabsTrigger>
          </TabsList>
          <TabsContent value="mint">
            <Mint setUserBalance={setUserWalletBalance} />
          </TabsContent>
          <TabsContent value="stake">
            <Stake
              setUserStakedAmount={setStakedBalance}
              walletBalance={userWalletBalance}
            />
          </TabsContent>
          <TabsContent value="unstake">
            <Unstake
              setUserStakedAmount={setStakedBalance}
              setUserBalance={setUserWalletBalance}
              userStakedAmount={stakedBalance}
            />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}