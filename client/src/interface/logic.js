import { VoyageProvider, getLogicDriver } from "js-moi-sdk";

// Always keep your logicId updated
const provider = new VoyageProvider("babylon");
const logicId = "your logic id here";

////////////////////////
// Mutate/Write Calls
///////////////////////

const ClaimToken = async (wallet) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.Claim();
  return ixResponse.wait();
};

////////////////////////
// Observe/Read Calls
///////////////////////

const GetTokenName = async () => {
  const logicDriver = await getLogicDriver(logicId, provider);
  return logicDriver.routines.Name();
};
const GetTokenBalanceOf = async (account) => {
  const logicDriver = await getLogicDriver(logicId, provider);
  return logicDriver.routines.BalanceOf(account);
};
const GetTokenClaimAmount = async () => {
  const logicDriver = await getLogicDriver(logicId, provider);
  return logicDriver.routines.ClaimAmount();
};

// returns a unix timestamp in seconds
const GetNextClaim = async (account) => {
  const logicDriver = await getLogicDriver(logicId, provider);
  return logicDriver.routines.NextClaim(account);
};
const GetTokenDecimals = async () => {
  const logicDriver = await getLogicDriver(logicId, provider);
  return logicDriver.routines.Decimals();
};

// get the decimal value / precision of the token
const GetTokenSymbol = async () => {
  const logicDriver = await getLogicDriver(logicId, provider);
  return logicDriver.routines.Symbol();
};

const logic = {
  GetTokenName,
  GetTokenBalanceOf,
  GetNextClaim,
  GetTokenClaimAmount,
  GetTokenDecimals,
  GetTokenSymbol,
  ClaimToken,
};

export default logic;
