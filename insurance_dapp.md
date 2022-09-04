<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Insurance Dapp</h3>

<div align="center">


</div>

---

<p align="center"> Insurance Dapp Workshop
    <br> 
</p>

Insurance Dapp workshop
The sole purpose of this workshop is to explain the implementation of the Insurance Dapp written in the Reach blockchain language.
The insurance dapp is a decentralized application that acts as a  tradition insurance company, where custormers pay to the insurance company and when they require financial aid due to an unforseen / unfortunate event they submit claims and the amount they need to fix the problem at hand, The insurance company verifies if this claims are valid, if yes they release the required funds requested else the claim is approved and no funds is released.
So in this reach program the custormers/ subscribers pay a one-time fee in algo, the fee has to me higher or equal to the minimum subscription price.

This workshop assumes that you have completed at least one of the tutorials on the reach docs.

# Code and explanation
Run `./reach init` to generate a boiler plate index.rsh and index.mjs file.

```js
'reach 0.1'

export const main = Reach.App(() => {
   const Insurance_company = Participant('Insurance_company', {
        Sub_amt: Fun([], UInt),
        Check_claim: Fun([Bytes(100)], Bool),
        Check_pay: Fun([UInt], Bool),
        deny_claim: Fun([], Null)
    })

    const Subscribers = API('Subscribers', {
        Subscribe: Fun([UInt], Null),
        Submit_claim: Fun([Bytes(100), UInt], Null)
    })

    init()
    Insurance_company.only(() => {
        const subamout = declassify(interact.Sub_amt())
    })

    Insurance_company.publish(subamout)
})
```
In the snippet above
* We first declared the versin of reach we wil be using
* In this program we make use of 1 participant and 1 Api, the insurance company is the Participant while subscribers can use the api to attach to the smart contract and pay the subcription fee
* We also assign functions and parameters to the participants of the contract
* We use the init() function to initialize the reach application 
* And finally to make our first publication to the contract by access the value from the Sub_amt() function, declassifying and publishing.
```js
const [usernum, subs, total_sum, user_pay] =
        parallelReduce([0, Array.replicate(10, Insurance_company), 0, Array.replicate(10, 0)])
            .invariant(balance() == total_sum)
            .while(usernum < 10)
            .api(
                Subscribers.Subscribe,
                (p) => p,
                (p, rs) => {
                    rs(null)
                    return [usernum + 1, subs.set(usernum, this), total_sum + p, user_pay.set(usernum, p)]
                }
            )
const word = Bytes(100).pad('user_claims')
const [userid, userclaim, funds_requested] =
        parallelReduce([0, Array.replicate(10, word), Array.replicate(10, 0)])
            .invariant(balance() == total_sum)
            .while(userid < 10)
            .api(
                Subscribers.Submit_claim,
                (claim, funds, return_statement) => {
                    return_statement(null)
                    return [userid + 1, userclaim.set(userid, claim), funds_requested.set(userid, funds)]
                }
            )
    transfer(balance()).to(Insurance_company)
    commit()
```
* In this dapp the max amount of users that connect to through the api is 10 as shown above
* In the code snippet above we write 2 api calls, one is used to accept the subscription payments while the other is used to get subscriber claims
* After collecting this data from the api we then transfer the whole funds in the contract to the Insurance company and we commit to exit the consensus step

```js
var [subscriber_claim, subscriber_address, i, subscriber_pay, subscriber_funds_requested] =
        [userclaim, subs, 0, user_pay, funds_requested]
    invariant(balance() == 0)
    while (i < 10) {
        commit()

        Insurance_company.only(() => {
            const checkpay = declassify(interact.Check_pay(subscriber_pay[i]))
        })
        Insurance_company.publish(checkpay)

        if (checkpay) {
            commit()
            Insurance_company.only(() => {
                const get_claim = declassify(interact.Check_claim(subscriber_claim[i]))
            })
            Insurance_company.publish(get_claim)
            if (get_claim) {
                commit()
                Insurance_company.pay(subscriber_funds_requested[i])
                transfer(subscriber_funds_requested[i]).to(subscriber_address[i])
            } else {
                commit()
                Insurance_company.only(() => {
                    const deny = declassify(interact.deny_claim())
                })
                Insurance_company.publish()
            }

        } else {
            commit()
            Insurance_company.pay(subscriber_pay[i])
            transfer(subscriber_pay[i]).to(subscriber_address[i])
        }
        [subscriber_claim, subscriber_address, i, subscriber_pay] = [subscriber_claim, subscriber_address, i + 1, subscriber_pay]
        continue

    }
    commit()
```
In the code block above we use a while loop to handle the logic mentioned below
* We firstly use the Check_pay() function to check if the users paid the appropriate amount 
* If yes then we access the Check_claim() function to check the claim submitted by the subscribers, if no the initial payment is transfered back to that subscriber
* If the claim is approved the requested fund is sent to the subcriber who requested for the funds, if the claim is denied the cash or algo is sent to the related subscriber

# Functions used to handle this logic
* Var : The var is used to make the variables mutable in the while loop
* While loop : The while loop was used to access the values of the arrays that held the addresses and claims of the subscribers
* If-else statement : this was used to handle certian conditions in the while loop eg: if the claim wasn't approved do this else do that....
* transfer : We use the transfer function to make transfer of funds in the reach smart contract

Full index.rsh file
```js
'reach 0.1'

export const main = Reach.App(() => {
    const Insurance_company = Participant('Insurance_company', {
        Sub_amt: Fun([], UInt),
        Check_claim: Fun([Bytes(100)], Bool),
        Check_pay: Fun([UInt], Bool),
        deny_claim: Fun([], Null)
    })

    const Subscribers = API('Subscribers', {
        Subscribe: Fun([UInt], Null),
        Submit_claim: Fun([Bytes(100), UInt], Null)
    })

    init()
    Insurance_company.only(() => {
        const subamout = declassify(interact.Sub_amt())
    })

    Insurance_company.publish(subamout)
    const [usernum, subs, total_sum, user_pay] =
        parallelReduce([0, Array.replicate(10, Insurance_company), 0, Array.replicate(10, 0)])
            .invariant(balance() == total_sum)
            .while(usernum < 10)
            .api(
                Subscribers.Subscribe,
                (p) => p,
                (p, rs) => {
                    rs(null)
                    return [usernum + 1, subs.set(usernum, this), total_sum + p, user_pay.set(usernum, p)]
                }
            )
    const word = Bytes(100).pad('user_claims')
    const [userid, userclaim, funds_requested] =
        parallelReduce([0, Array.replicate(10, word), Array.replicate(10, 0)])
            .invariant(balance() == total_sum)
            .while(userid < 10)
            .api(
                Subscribers.Submit_claim,
                (claim, funds, return_statement) => {
                    return_statement(null)
                    return [userid + 1, userclaim.set(userid, claim), funds_requested.set(userid, funds)]
                }
            )
    transfer(balance()).to(Insurance_company)
    commit()
    Insurance_company.publish()

    var [subscriber_claim, subscriber_address, i, subscriber_pay, subscriber_funds_requested] =
        [userclaim, subs, 0, user_pay, funds_requested]
    invariant(balance() == 0)
    while (i < 10) {
        commit()

        Insurance_company.only(() => {
            const checkpay = declassify(interact.Check_pay(subscriber_pay[i]))
        })
        Insurance_company.publish(checkpay)

        if (checkpay) {
            commit()
            Insurance_company.only(() => {
                const get_claim = declassify(interact.Check_claim(subscriber_claim[i]))
            })
            Insurance_company.publish(get_claim)
            if (get_claim) {
                commit()
                Insurance_company.pay(subscriber_funds_requested[i])
                transfer(subscriber_funds_requested[i]).to(subscriber_address[i])
            } else {
                commit()
                Insurance_company.only(() => {
                    const deny = declassify(interact.deny_claim())
                })
                Insurance_company.publish()
            }

        } else {
            commit()
            Insurance_company.pay(subscriber_pay[i])
            transfer(subscriber_pay[i]).to(subscriber_address[i])
        }
        [subscriber_claim, subscriber_address, i, subscriber_pay] = [subscriber_claim, subscriber_address, i + 1, subscriber_pay]
        continue

    }
    commit()
})
```
Full index.mjs file for testing the smart contract
```js
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';



const stdlib = await loadStdlib(process.env);
const startingBalance = stdlib.parseCurrency(10000);

const accInsurance = await stdlib.newTestAccount(stdlib.parseCurrency(100000));
const Subscribersacc = await stdlib.newTestAccounts(10, startingBalance);

const ctcInsurance = accInsurance.contract(backend);

const showBalance = async (acc, name) => {
    const amt = await stdlib.balanceOf(acc);
    console.log(`${name} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit}`);
};

const subscribe = async (accs, p) => {
    try {
        const ctc = accs.contract(backend, ctcInsurance.getInfo());
        const pay = stdlib.parseCurrency(p);
        await ctc.apis.Subscribers.Subscribe(pay);
    } catch (error) {
        console.log(error)
    }

}

const Submit_claim = async (accs, claim, funds) => {
    try {
        const ctc = accs.contract(backend, ctcInsurance.getInfo());
        const rf = stdlib.parseCurrency(funds);
        await ctc.apis.Subscribers.Submit_claim(claim, rf);
    } catch (error) {
        console.log(error)
    }

}

const pay_amount = await ask(`what is the minimum pay for subcription: `)
const dd = stdlib.parseCurrency(pay_amount)

await Promise.all([
    ctcInsurance.p.Insurance_company({
        Sub_amt: async () => {
            console.log(`The minimum amount for subscription is ${pay_amount}`)
            return parseInt(pay_amount)
        },
        Check_claim: async (clm) => {
            console.log(`The insurance company saw claim : ${clm}\nAwaiting decision................`)
            const decision = await ask(`what's your decision 1 for approve and 0 for deny`)
            if (parseInt(decision) == 1) {
                console.log(`Your claim was approved`)
                return true
            } else {
                console.log(`Your claim was denied`)
                return false
            }
        },
        Check_pay: async (sub_pay) => {
            console.log(`seen cash :  ${stdlib.formatCurrency(sub_pay)} ${stdlib.standardUnit}`)

            if (sub_pay >= dd) {
                console.log(`Your pay to the dapp was approved`)
                return true
            } else {
                console.log(`Your pay was declined\nAwait your pay refund`)
                return false
            }
        },
        deny_claim: async () => {
            console.log(`sorry your claim was denied\n Due to suspected fraud`)
        }
    }),
    await subscribe(Subscribersacc[0], 6000),
    await subscribe(Subscribersacc[1], 5500),
    await subscribe(Subscribersacc[2], 7000),
    await subscribe(Subscribersacc[3], 5000),
    await subscribe(Subscribersacc[4], 7000),
    await subscribe(Subscribersacc[5], 8000),
    await subscribe(Subscribersacc[6], 5200),
    await subscribe(Subscribersacc[7], 6000),
    await subscribe(Subscribersacc[8], 6000),
    await subscribe(Subscribersacc[9], 6000),
    await Submit_claim(Subscribersacc[0], 'my car got stolen', 10000),
    await Submit_claim(Subscribersacc[1], 'my house got burnt', 13000),
    await Submit_claim(Subscribersacc[2], 'i had a car accident', 7000),
    await Submit_claim(Subscribersacc[3], 'need new car ', 4000),
    await Submit_claim(Subscribersacc[4], 'i want money', 3500),
    await Submit_claim(Subscribersacc[5], 'my car got stolen', 9000),
    await Submit_claim(Subscribersacc[6], 'my car got stolen', 20000),
    await Submit_claim(Subscribersacc[7], 'my car got stolen', 15000),
    await Submit_claim(Subscribersacc[8], 'my car got stolen', 30000),
    await Submit_claim(Subscribersacc[9], 'my car got stolen', 70000),

])
await showBalance(accInsurance, 'The Insurance company')
await showBalance(Subscribersacc[0], 'steve')
await showBalance(Subscribersacc[1], 'emeka')
await showBalance(Subscribersacc[2], 'chibike')
await showBalance(Subscribersacc[3], 'jerry')
await showBalance(Subscribersacc[4], 'james')
await showBalance(Subscribersacc[5], 'hana')
await showBalance(Subscribersacc[6], 'chibby')
await showBalance(Subscribersacc[7], 'chizzy')
await showBalance(Subscribersacc[8], 'terry')
await showBalance(Subscribersacc[9], 'jacob')

process.exit()
```