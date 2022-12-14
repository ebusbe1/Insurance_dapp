// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc3, ctc3, ctc5],
      6: [ctc0, ctc2, ctc1, ctc5, ctc3, ctc3],
      7: [ctc0, ctc2, ctc1, ctc5, ctc3, ctc3],
      8: [ctc0, ctc2, ctc1, ctc5, ctc3, ctc3],
      9: [ctc0, ctc2, ctc1, ctc5, ctc3, ctc3],
      10: [ctc0, ctc2, ctc1, ctc5, ctc3, ctc3],
      11: [ctc0, ctc1, ctc3, ctc3, ctc5, ctc2, ctc2],
      12: [ctc0, ctc3, ctc1, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Insurance_company(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Insurance_company expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Insurance_company expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc4 = stdlib.T_Tuple([ctc3, ctc0]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc8 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc9 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  
  
  const v376 = stdlib.protect(ctc0, await interact.Sub_amt(), {
    at: './index.rsh:18:49:application',
    fs: ['at ./index.rsh:17:25:application call to [unknown function] (defined at: ./index.rsh:17:29:function exp)'],
    msg: 'Sub_amt',
    who: 'Insurance_company'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v376],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:21:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v378], secs: v380, time: v379, didSend: v27, from: v377 } = txn1;
      
      ;
      const v382 = [v377, v377, v377, v377, v377, v377, v377, v377, v377, v377];
      const v384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v387 = v382;
      const v389 = v384;
      const v390 = stdlib.checkedBigNumberify('./index.rsh:24:5:decimal', stdlib.UInt_max, '0');
      const v391 = v379;
      const v394 = stdlib.checkedBigNumberify('./index.rsh:16:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v397 = stdlib.lt(v390, stdlib.checkedBigNumberify('./index.rsh:30:22:decimal', stdlib.UInt_max, '10'));
        
        return v397;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v430 = 'user_claims                                                                                         ';
        const v450 = [v430, v430, v430, v430, v430, v430, v430, v430, v430, v430];
        const v465 = v384;
        const v466 = v450;
        const v467 = stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0');
        const v468 = v391;
        const v471 = v394;
        
        if (await (async () => {
          const v474 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '10'));
          
          return v474;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v377,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v378], secs: v380, time: v379, didSend: v27, from: v377 } = txn1;
  ;
  const v382 = [v377, v377, v377, v377, v377, v377, v377, v377, v377, v377];
  const v384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v387 = v382;
  let v389 = v384;
  let v390 = stdlib.checkedBigNumberify('./index.rsh:24:5:decimal', stdlib.UInt_max, '0');
  let v391 = v379;
  let v394 = stdlib.checkedBigNumberify('./index.rsh:16:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v397 = stdlib.lt(v390, stdlib.checkedBigNumberify('./index.rsh:30:22:decimal', stdlib.UInt_max, '10'));
    
    return v397;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v407], secs: v409, time: v408, didSend: v108, from: v406 } = txn2;
    undefined /* setApiDetails */;
    const v411 = v407[stdlib.checkedBigNumberify('./index.rsh:31:9:spread', stdlib.UInt_max, '0')];
    const v413 = stdlib.safeAdd(v394, v411);
    ;
    const v415 = null;
    await txn2.getOutput('Subscribers_Subscribe', 'v415', ctc2, v415);
    const v422 = stdlib.safeAdd(v390, stdlib.checkedBigNumberify('./index.rsh:37:21:decimal', stdlib.UInt_max, '1'));
    const v424 = stdlib.Array_set(v387, v390, v406);
    const v427 = stdlib.Array_set(v389, v390, v411);
    const cv387 = v424;
    const cv389 = v427;
    const cv390 = v422;
    const cv391 = v408;
    const cv394 = v413;
    
    v387 = cv387;
    v389 = cv389;
    v390 = cv390;
    v391 = cv391;
    v394 = cv394;
    
    continue;
    
    }
  const v430 = 'user_claims                                                                                         ';
  const v450 = [v430, v430, v430, v430, v430, v430, v430, v430, v430, v430];
  let v465 = v384;
  let v466 = v450;
  let v467 = stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0');
  let v468 = v391;
  let v471 = v394;
  
  while (await (async () => {
    const v474 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '10'));
    
    return v474;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v485], secs: v487, time: v486, didSend: v235, from: v484 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v489 = v485[stdlib.checkedBigNumberify('./index.rsh:52:9:spread', stdlib.UInt_max, '0')];
    const v490 = v485[stdlib.checkedBigNumberify('./index.rsh:52:9:spread', stdlib.UInt_max, '1')];
    const v491 = null;
    await txn2.getOutput('Subscribers_Submit_claim', 'v491', ctc2, v491);
    const v499 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '1'));
    const v501 = stdlib.Array_set(v466, v467, v489);
    const v503 = stdlib.Array_set(v465, v467, v490);
    const cv465 = v503;
    const cv466 = v501;
    const cv467 = v499;
    const cv468 = v486;
    const cv471 = v471;
    
    v465 = cv465;
    v466 = cv466;
    v467 = cv467;
    v468 = cv468;
    v471 = cv471;
    
    continue;
    
    }
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v377, v387, v389, v465, v466],
    evt_cnt: 0,
    funcNum: 3,
    lct: v468,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v512, time: v511, didSend: v263, from: v510 } = txn2;
      
      ;
      const v514 = stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0');
      const v515 = v387;
      const v516 = v466;
      const v517 = v465;
      const v518 = v389;
      const v519 = v511;
      
      if (await (async () => {
        const v529 = stdlib.lt(v514, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '10'));
        
        return v529;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc9, ctc9, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v512, time: v511, didSend: v263, from: v510 } = txn2;
  ;
  const v513 = stdlib.addressEq(v377, v510);
  stdlib.assert(v513, {
    at: './index.rsh:62:21:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurance_company'
    });
  let v514 = stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0');
  let v515 = v387;
  let v516 = v466;
  let v517 = v465;
  let v518 = v389;
  let v519 = v511;
  
  while (await (async () => {
    const v529 = stdlib.lt(v514, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '10'));
    
    return v529;})()) {
    const v533 = v518[v514];
    const v534 = stdlib.protect(ctc5, await interact.Check_pay(v533), {
      at: './index.rsh:76:53:application',
      fs: ['at ./index.rsh:75:27:application call to [unknown function] (defined at: ./index.rsh:75:31:function exp)'],
      msg: 'Check_pay',
      who: 'Insurance_company'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v377, v514, v515, v516, v517, v518, v534],
      evt_cnt: 1,
      funcNum: 5,
      lct: v519,
      onlyIf: true,
      out_tys: [ctc5],
      pay: [stdlib.checkedBigNumberify('./index.rsh:78:23:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v536], secs: v538, time: v537, didSend: v285, from: v535 } = txn3;
        
        ;
        if (v536) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc0, ctc7, ctc8, ctc9, ctc9, ctc5],
      waitIfNotPresent: false
      }));
    const {data: [v536], secs: v538, time: v537, didSend: v285, from: v535 } = txn3;
    ;
    const v539 = stdlib.addressEq(v377, v535);
    stdlib.assert(v539, {
      at: './index.rsh:78:23:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Insurance_company'
      });
    if (v536) {
      const v543 = v516[v514];
      const v544 = stdlib.protect(ctc5, await interact.Check_claim(v543), {
        at: './index.rsh:83:58:application',
        fs: ['at ./index.rsh:82:29:application call to [unknown function] (defined at: ./index.rsh:82:33:function exp)'],
        msg: 'Check_claim',
        who: 'Insurance_company'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v377, v514, v515, v516, v517, v518, v544],
        evt_cnt: 1,
        funcNum: 6,
        lct: v537,
        onlyIf: true,
        out_tys: [ctc5],
        pay: [stdlib.checkedBigNumberify('./index.rsh:85:25:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v546], secs: v548, time: v547, didSend: v297, from: v545 } = txn4;
          
          ;
          if (v546) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc0, ctc7, ctc8, ctc9, ctc9, ctc5],
        waitIfNotPresent: false
        }));
      const {data: [v546], secs: v548, time: v547, didSend: v297, from: v545 } = txn4;
      ;
      const v549 = stdlib.addressEq(v377, v545);
      stdlib.assert(v549, {
        at: './index.rsh:85:25:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurance_company'
        });
      if (v546) {
        const v551 = v517[v514];
        
        const txn5 = await (ctc.sendrecv({
          args: [v377, v514, v515, v516, v517, v518],
          evt_cnt: 0,
          funcNum: 7,
          lct: v547,
          onlyIf: true,
          out_tys: [],
          pay: [v551, []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v554, time: v553, didSend: v308, from: v552 } = txn5;
            
            const v556 = v517[v514];
            sim_r.txns.push({
              amt: v556,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v563 = v515[v514];
            sim_r.txns.push({
              kind: 'from',
              to: v563,
              tok: undefined /* Nothing */
              });
            const v568 = stdlib.safeAdd(v514, stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '1'));
            const cv514 = v568;
            const cv515 = v515;
            const cv516 = v516;
            const cv517 = v517;
            const cv518 = v518;
            const cv519 = v553;
            
            await (async () => {
              const v514 = cv514;
              const v515 = cv515;
              const v516 = cv516;
              const v517 = cv517;
              const v518 = cv518;
              const v519 = cv519;
              
              if (await (async () => {
                const v529 = stdlib.lt(v514, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '10'));
                
                return v529;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc6, ctc0, ctc7, ctc8, ctc9, ctc9],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v554, time: v553, didSend: v308, from: v552 } = txn5;
        const v556 = v517[v514];
        ;
        const v559 = stdlib.addressEq(v377, v552);
        stdlib.assert(v559, {
          at: './index.rsh:88:27:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Insurance_company'
          });
        const v563 = v515[v514];
        ;
        const v568 = stdlib.safeAdd(v514, stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '1'));
        const cv514 = v568;
        const cv515 = v515;
        const cv516 = v516;
        const cv517 = v517;
        const cv518 = v518;
        const cv519 = v553;
        
        v514 = cv514;
        v515 = cv515;
        v516 = cv516;
        v517 = cv517;
        v518 = cv518;
        v519 = cv519;
        
        continue;
        
        }
      else {
        stdlib.protect(ctc2, await interact.deny_claim(), {
          at: './index.rsh:93:54:application',
          fs: ['at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:35:function exp)'],
          msg: 'deny_claim',
          who: 'Insurance_company'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v377, v514, v515, v516, v517, v518],
          evt_cnt: 0,
          funcNum: 8,
          lct: v547,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:95:27:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v573, time: v572, didSend: v324, from: v571 } = txn5;
            
            ;
            const v575 = stdlib.safeAdd(v514, stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '1'));
            const cv514 = v575;
            const cv515 = v515;
            const cv516 = v516;
            const cv517 = v517;
            const cv518 = v518;
            const cv519 = v572;
            
            await (async () => {
              const v514 = cv514;
              const v515 = cv515;
              const v516 = cv516;
              const v517 = cv517;
              const v518 = cv518;
              const v519 = cv519;
              
              if (await (async () => {
                const v529 = stdlib.lt(v514, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '10'));
                
                return v529;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc6, ctc0, ctc7, ctc8, ctc9, ctc9],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v573, time: v572, didSend: v324, from: v571 } = txn5;
        ;
        const v574 = stdlib.addressEq(v377, v571);
        stdlib.assert(v574, {
          at: './index.rsh:95:27:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Insurance_company'
          });
        const v575 = stdlib.safeAdd(v514, stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '1'));
        const cv514 = v575;
        const cv515 = v515;
        const cv516 = v516;
        const cv517 = v517;
        const cv518 = v518;
        const cv519 = v572;
        
        v514 = cv514;
        v515 = cv515;
        v516 = cv516;
        v517 = cv517;
        v518 = cv518;
        v519 = cv519;
        
        continue;
        
        }
      
      }
    else {
      const txn4 = await (ctc.sendrecv({
        args: [v377, v514, v515, v516, v517, v518],
        evt_cnt: 0,
        funcNum: 9,
        lct: v537,
        onlyIf: true,
        out_tys: [],
        pay: [v533, []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v580, time: v579, didSend: v335, from: v578 } = txn4;
          
          const v582 = v518[v514];
          sim_r.txns.push({
            amt: v582,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v589 = v515[v514];
          sim_r.txns.push({
            kind: 'from',
            to: v589,
            tok: undefined /* Nothing */
            });
          const v594 = stdlib.safeAdd(v514, stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '1'));
          const cv514 = v594;
          const cv515 = v515;
          const cv516 = v516;
          const cv517 = v517;
          const cv518 = v518;
          const cv519 = v579;
          
          await (async () => {
            const v514 = cv514;
            const v515 = cv515;
            const v516 = cv516;
            const v517 = cv517;
            const v518 = cv518;
            const v519 = cv519;
            
            if (await (async () => {
              const v529 = stdlib.lt(v514, stdlib.checkedBigNumberify('./index.rsh:72:14:decimal', stdlib.UInt_max, '10'));
              
              return v529;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc0, ctc7, ctc8, ctc9, ctc9],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v580, time: v579, didSend: v335, from: v578 } = txn4;
      const v582 = v518[v514];
      ;
      const v585 = stdlib.addressEq(v377, v578);
      stdlib.assert(v585, {
        at: './index.rsh:99:25:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurance_company'
        });
      const v589 = v515[v514];
      ;
      const v594 = stdlib.safeAdd(v514, stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '1'));
      const cv514 = v594;
      const cv515 = v515;
      const cv516 = v516;
      const cv517 = v517;
      const cv518 = v518;
      const cv519 = v579;
      
      v514 = cv514;
      v515 = cv515;
      v516 = cv516;
      v517 = cv517;
      v518 = cv518;
      v519 = cv519;
      
      continue;
      
      }
    
    }
  return;
  
  
  
  
  };
export async function _Subscribers_Submit_claim11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Subscribers_Submit_claim11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Subscribers_Submit_claim11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc6 = stdlib.T_Tuple([ctc4, ctc2]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v377, v387, v389, v465, v466, v467, v471] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc3, ctc3, ctc5, ctc2, ctc2]);
  const v477 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:9:function exp)', 'at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:9:function exp)'],
    msg: 'in',
    who: 'Subscribers_Submit_claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v377, v387, v389, v465, v466, v467, v471, v477],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v485], secs: v487, time: v486, didSend: v235, from: v484 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Subscribers_Submit_claim"
        });
      ;
      const v489 = v485[stdlib.checkedBigNumberify('./index.rsh:52:9:spread', stdlib.UInt_max, '0')];
      const v490 = v485[stdlib.checkedBigNumberify('./index.rsh:52:9:spread', stdlib.UInt_max, '1')];
      const v491 = null;
      const v492 = await txn1.getOutput('Subscribers_Submit_claim', 'v491', ctc7, v491);
      
      const v499 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '1'));
      const v501 = stdlib.Array_set(v466, v467, v489);
      const v503 = stdlib.Array_set(v465, v467, v490);
      const v829 = v503;
      const v830 = v501;
      const v831 = v499;
      const v833 = v471;
      const v834 = stdlib.lt(v499, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '10'));
      if (v834) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v377,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc3, ctc5, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v485], secs: v487, time: v486, didSend: v235, from: v484 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v489 = v485[stdlib.checkedBigNumberify('./index.rsh:52:9:spread', stdlib.UInt_max, '0')];
  const v490 = v485[stdlib.checkedBigNumberify('./index.rsh:52:9:spread', stdlib.UInt_max, '1')];
  const v491 = null;
  const v492 = await txn1.getOutput('Subscribers_Submit_claim', 'v491', ctc7, v491);
  if (v235) {
    stdlib.protect(ctc7, await interact.out(v485, v492), {
      at: './index.rsh:52:10:application',
      fs: ['at ./index.rsh:52:10:application call to [unknown function] (defined at: ./index.rsh:52:10:function exp)', 'at ./index.rsh:53:23:application call to "return_statement" (defined at: ./index.rsh:52:69:function exp)', 'at ./index.rsh:52:69:application call to [unknown function] (defined at: ./index.rsh:52:69:function exp)'],
      msg: 'out',
      who: 'Subscribers_Submit_claim'
      });
    }
  else {
    }
  
  const v499 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, '1'));
  const v501 = stdlib.Array_set(v466, v467, v489);
  const v503 = stdlib.Array_set(v465, v467, v490);
  const v829 = v503;
  const v830 = v501;
  const v831 = v499;
  const v833 = v471;
  const v834 = stdlib.lt(v499, stdlib.checkedBigNumberify('./index.rsh:51:21:decimal', stdlib.UInt_max, '10'));
  if (v834) {
    return;
    }
  else {
    ;
    return;
    }
  
  
  };
export async function _Subscribers_Subscribe12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Subscribers_Subscribe12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Subscribers_Subscribe12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Null;
  
  
  const [v377, v384, v387, v389, v390, v394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc0, ctc2, ctc3, ctc2, ctc1, ctc1]);
  const v400 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:9:function exp)', 'at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:9:function exp)'],
    msg: 'in',
    who: 'Subscribers_Subscribe'
    });
  const v401 = v400[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v377, v384, v387, v389, v390, v394, v400],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v401, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v407], secs: v409, time: v408, didSend: v108, from: v406 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Subscribers_Subscribe"
        });
      const v411 = v407[stdlib.checkedBigNumberify('./index.rsh:31:9:spread', stdlib.UInt_max, '0')];
      const v413 = stdlib.safeAdd(v394, v411);
      sim_r.txns.push({
        amt: v411,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v415 = null;
      const v416 = await txn1.getOutput('Subscribers_Subscribe', 'v415', ctc5, v415);
      
      const v422 = stdlib.safeAdd(v390, stdlib.checkedBigNumberify('./index.rsh:37:21:decimal', stdlib.UInt_max, '1'));
      const v424 = stdlib.Array_set(v387, v390, v406);
      const v427 = stdlib.Array_set(v389, v390, v411);
      const v881 = v424;
      const v882 = v427;
      const v883 = v422;
      const v885 = v413;
      const v886 = stdlib.lt(v422, stdlib.checkedBigNumberify('./index.rsh:30:22:decimal', stdlib.UInt_max, '10'));
      if (v886) {
        sim_r.isHalt = false;
        }
      else {
        const v887 = 'user_claims                                                                                         ';
        const v888 = [v887, v887, v887, v887, v887, v887, v887, v887, v887, v887];
        const v953 = v384;
        const v954 = v888;
        const v955 = stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0');
        const v957 = v413;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc2, ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v407], secs: v409, time: v408, didSend: v108, from: v406 } = txn1;
  undefined /* setApiDetails */;
  const v411 = v407[stdlib.checkedBigNumberify('./index.rsh:31:9:spread', stdlib.UInt_max, '0')];
  const v413 = stdlib.safeAdd(v394, v411);
  ;
  const v415 = null;
  const v416 = await txn1.getOutput('Subscribers_Subscribe', 'v415', ctc5, v415);
  if (v108) {
    stdlib.protect(ctc5, await interact.out(v407, v416), {
      at: './index.rsh:32:7:application',
      fs: ['at ./index.rsh:32:7:application call to [unknown function] (defined at: ./index.rsh:32:7:function exp)', 'at ./index.rsh:35:11:application call to "rs" (defined at: ./index.rsh:34:15:function exp)', 'at ./index.rsh:34:15:application call to [unknown function] (defined at: ./index.rsh:34:15:function exp)'],
      msg: 'out',
      who: 'Subscribers_Subscribe'
      });
    }
  else {
    }
  
  const v422 = stdlib.safeAdd(v390, stdlib.checkedBigNumberify('./index.rsh:37:21:decimal', stdlib.UInt_max, '1'));
  const v424 = stdlib.Array_set(v387, v390, v406);
  const v427 = stdlib.Array_set(v389, v390, v411);
  const v881 = v424;
  const v882 = v427;
  const v883 = v422;
  const v885 = v413;
  const v886 = stdlib.lt(v422, stdlib.checkedBigNumberify('./index.rsh:30:22:decimal', stdlib.UInt_max, '10'));
  if (v886) {
    return;
    }
  else {
    const v887 = 'user_claims                                                                                         ';
    const v888 = [v887, v887, v887, v887, v887, v887, v887, v887, v887, v887];
    const v953 = v384;
    const v954 = v888;
    const v955 = stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0');
    const v957 = v413;
    return;
    }
  
  
  };
export async function Subscribers_Submit_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Subscribers_Submit_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Subscribers_Submit_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Subscribers_Submit_claim11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Subscribers_Subscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Subscribers_Subscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Subscribers_Subscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 12) {return _Subscribers_Subscribe12(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Subscribers_Submit_claim(byte[100],uint64)byte[0]`, `Subscribers_Subscribe(uint64)byte[0]`],
    pure: [],
    sigs: [`Subscribers_Submit_claim(byte[100],uint64)byte[0]`, `Subscribers_Subscribe(uint64)byte[0]`]
    },
  appApproval: `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`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 13,
  stateSize: 1528,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "elem0",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v485",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T28",
                "name": "v407",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v536",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v546",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v415",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v491",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes4",
            "name": "elem3",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T9",
        "name": "_a0",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Subscribers_Submit_claim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Subscribers_Subscribe",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "elem0",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v485",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T28",
                "name": "v407",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v536",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v546",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200331738038062003317833981016040819052620000269162000825565b600080554360035562000038620004d8565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c341560076200019c565b8051339081905281516020908101829052825160409081018390528351606090810184905284516080908101859052855160a0908101869052865160c0908101879052875160e09081018890528851610100908101899052895161012001989098528689018051600090819052815190980188905280519096018790528551909401869052845190920185905283510184905282510183905281510182905280519092018190529051600960200201526200014662000501565b8051339052602080830180518351830152835182840180519190915290518151909201919091528051600060409091018190528151436060909101529051608001526200019381620001c6565b50505062000b0d565b81620001c25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001d062000525565b600a82602001516040015110156200027c57620001ec62000560565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518301516060850152815181015160808086019190915291519091015160a0840152600c600055436001555162000250918391016200091a565b6040516020818303038152906040526002908051906020019062000276929190620005b7565b50505050565b80516a757365725f636c61696d7360a81b9052805160006020918201819052825160409081018290528351606090810192909252835183850180519190915284518151909401939093528351835190910152825182519091015281518151608001528151815160a001528151815160c001528151815160e001528151815161010001528151905161012001526200031262000646565b82515181516001600160a01b0390911690526020808401805151835183015280518201518351604090810191909152855183015183850180519190915285840151815190940193909352825160009101528051606090810151835190910152516080908101519151015262000387816200038c565b505050565b600a81602001516040015110156200043857620003a86200066a565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840180515160608501528051830151608080860191909152815183015160a08601529051015160c0840152600b60005543600155516200041291839101620009db565b6040516020818303038152906040526002908051906020019062000387929190620005b7565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200047b573d6000803e3d6000fd5b5062000486620006bc565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152818401805151606085015251820151608084015260036000554360015551620004129183910162000a60565b6040518060400160405280620004ed620006fa565b8152602001620004fc620006fa565b905290565b60405180604001604052806200051662000719565b8152602001620004fc6200073e565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b8152602001620004fc6200077d565b6040518060c0016040528060006001600160a01b0316815260200162000585620006fa565b815260200162000594620006fa565b8152602001620005a3620006fa565b815260200160008152602001600081525090565b828054620005c59062000ad0565b90600052602060002090601f016020900481019282620005e9576000855562000634565b82601f106200060457805160ff191683800117855562000634565b8280016001018555821562000634579182015b828111156200063457825182559160200191906001019062000617565b5062000642929150620007c5565b5090565b60405180604001604052806200065b620007dc565b8152602001620004fc62000801565b6040518060e0016040528060006001600160a01b031681526020016200068f620006fa565b81526020016200069e620006fa565b8152602001620006ad620006fa565b8152602001620005a36200077d565b6040518060a0016040528060006001600160a01b03168152602001620006e1620006fa565b8152602001620006f0620006fa565b8152602001620005515b604051806101400160405280600a906020820280368337509192915050565b604051806040016040528060006001600160a01b03168152602001620004fc620006fa565b6040518060a0016040528062000753620006fa565b815260200162000762620006fa565b81526020016000815260200160008152602001600081525090565b604051806101400160405280600a905b6040805160808101825260008082526020808301829052928201819052606082015282526000199092019101816200078d5790505090565b5b80821115620006425760008155600101620007c6565b604051806060016040528060006001600160a01b03168152602001620004ed620006fa565b6040518060a0016040528062000816620006fa565b8152602001620007626200077d565b60008183036040808212156200083a57600080fd5b80518082016001600160401b0380821183831017156200086a57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200088457600080fd5b835194506020850191508482108183111715620008b157634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b8060005b600a81101562000276578151845260209384019390910190600101620008cb565b8060005b600a811015620002765781516001600160a01b0316845260209384019390910190600101620008f0565b81516001600160a01b031681526020808301516104208301916200094190840182620008c7565b50604083015162000957610160840182620008ec565b5060608301516200096d6102a0840182620008c7565b5060808301516103e083015260a0909201516104009091015290565b8060005b600a811015620002765781518051855260208082015181870152604080830151908701526060918201516001600160e01b03191691860191909152608090940193909101906001016200098d565b81516001600160a01b0316815260208083015161092083019162000a0290840182620008ec565b50604083015162000a18610160840182620008c7565b50606083015162000a2e6102a0840182620008c7565b50608083015162000a446103e084018262000989565b5060a08301516108e083015260c0909201516109009091015290565b81516001600160a01b031681526020808301516108e083019162000a8790840182620008ec565b50604083015162000a9d610160840182620008c7565b50606083015162000ab36102a0840182620008c7565b50608083015162000ac96103e084018262000989565b5092915050565b600181811c9082168062000ae557607f821691505b6020821081141562000b0757634e487b7160e01b600052602260045260246000fd5b50919050565b6127fa8062000b1d6000396000f3fe6080604052600436106100bd5760003560e01c806373b4522c11610079578063ad9fa3d811610056578063ad9fa3d8146101a4578063bf2c5b24146101b7578063de736998146101ca578063e533a29d146101dd57005b806373b4522c14610159578063832307571461016c578063ab53f2c61461018157005b80631e93b0f1146100c657806324fab0a2146100ea578063456c7c35146100fd57806356d1fef31461011057806368081f55146101335780636da017a01461014657005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f8366004611d19565b6101f0565b6100c461010b366004611d3c565b610220565b61012361011e366004611e7d565b61024c565b60405190151581526020016100e1565b610123610141366004611ea8565b610293565b6100c4610154366004611d19565b6102d2565b6100c4610167366004611d19565b6102fe565b34801561017857600080fd5b506001546100d7565b34801561018d57600080fd5b5061019661032a565b6040516100e1929190611ec1565b6100c46101b2366004611d19565b6103c7565b6100c46101c5366004611d19565b6103f3565b6100c46101d8366004611d19565b61041f565b6100c46101eb366004611d19565b61044b565b604080518082019091526000808252602082015261021c61021636849003840184611f1e565b82610477565b5050565b604080518082019091526000808252602082015261021c61024636849003840184611f75565b82610699565b6000610256611892565b602080820180515186905251518101849052604080518082019091526000808252918101919091526102888282610699565b519150505b92915050565b600061029d6118b1565b60208082015151849052604080518082019091526000808252918101919091526102c78282610477565b602001519392505050565b604080518082019091526000808252602082015261021c6102f83684900384018461206c565b82610899565b604080518082019091526000808252602082015261021c61032436849003840184612088565b82610abb565b60006060600054600280805461033f906120be565b80601f016020809104026020016040519081016040528092919081815260200182805461036b906120be565b80156103b85780601f1061038d576101008083540402835291602001916103b8565b820191906000526020600020905b81548152906001019060200180831161039b57829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261021c6103ed3684900384018461206c565b82610c50565b604080518082019091526000808252602082015261021c61041936849003840184612088565b82610e42565b604080518082019091526000808252602082015261021c61044536849003840184612088565b82611080565b604080518082019091526000808252602082015261021c61047136849003840184612088565b82611211565b610487600c600054146024611346565b81516104a290158061049b57508251600154145b6025611346565b6000808055600280546104b4906120be565b80601f01602080910402602001604051908101604052809291908181526020018280546104e0906120be565b801561052d5780601f106105025761010080835404028352916020019161052d565b820191906000526020600020905b81548152906001019060200180831161051057829003601f168201915b505050505080602001905181019061054591906121a8565b60408051338152855160208083019190915286015151518183015290519192507fc2754c1005342796f181a0aa38e76a8368eed81f9c00ece446ac039633dc7ab1919081900360600190a1602083015151516105a49034146023611346565b604051600081527f695fb07e58a29934247662ba9c34fd7781b192bccf7f6b52a42c2698a44cb2119060200160405180910390a1600060208301526105e76118de565b815181516001600160a01b0390911690526020808301518251909101526040820151608083015161061991903361136c565b602080830151919091526060830151608084015191860151515161063d92906113fc565b60208083015101526080820151610655906001611470565b602080830180516040019290925290514360609091015260a08301519085015151516106819190611470565b602082015160800152610693816114bd565b50505050565b6106a9600b600054146021611346565b81516106c49015806106bd57508251600154145b6022611346565b6000808055600280546106d6906120be565b80601f0160208091040260200160405190810160405280929190818152602001828054610702906120be565b801561074f5780601f106107245761010080835404028352916020019161074f565b820191906000526020600020905b81548152906001019060200180831161073257829003601f168201915b505050505080602001905181019061076791906122ac565b90507f16a9411d67661ef1cc2e2771aa6b4f80e7c8b024662bc1bbdff3b9a2ae649ca5338460405161079a929190612385565b60405180910390a16107ae34156020611346565b604051600081527fd81098fee1b868df635d00c3d8d545dd6eac1e13b0f7d0d61711e60f5b66ff8e9060200160405180910390a1600082526107ee6118fe565b815181516001600160a01b0390911690526020808301518251820152604080840151835190910152606083015160a084015186830151519092015161083392906113fc565b60208083015191909152608083015160a0840151918601515151610857929061166b565b602080830151015260a082015161086f906001611470565b6020820180516040019190915280514360609091015260c0830151905160800152610693816116bf565b6108a96007600054146012611346565b81516108c49015806108bd57508251600154145b6013611346565b6000808055600280546108d6906120be565b80601f0160208091040260200160405190810160405280929190818152602001828054610902906120be565b801561094f5780601f106109245761010080835404028352916020019161094f565b820191906000526020600020905b81548152906001019060200180831161093257829003601f168201915b505050505080602001905181019061096791906123c5565b90507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe338460405161099a929190612447565b60405180910390a16109ae34156010611346565b80516109c6906001600160a01b031633146011611346565b60208301515115610a59576109d961191e565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260086000554360015551610a2e918391016124ee565b60405160208183030381529060405260029080519060200190610a52929190611964565b5050505050565b610a6161191e565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260096000554360015551610a2e918391016124ee565b505050565b610acb600360005414600a611346565b8151610ae6901580610adf57508251600154145b600b611346565b600080805560028054610af8906120be565b80601f0160208091040260200160405190810160405280929190818152602001828054610b24906120be565b8015610b715780601f10610b4657610100808354040283529160200191610b71565b820191906000526020600020905b815481529060010190602001808311610b5457829003601f168201915b5050505050806020019051810190610b899190612560565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63384604051610bbc9291906125f6565b60405180910390a1610bd034156008611346565b8051610be8906001600160a01b031633146009611346565b610bf06119e8565b815181516001600160a01b0390911690526020808201805160009052818401518151909201919091526080808401518251604090810191909152606080860151845190910152840151825190910152514360a09091015261069381611802565b610c60600660005414600e611346565b8151610c7b901580610c7457508251600154145b600f611346565b600080805560028054610c8d906120be565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb9906120be565b8015610d065780601f10610cdb57610100808354040283529160200191610d06565b820191906000526020600020905b815481529060010190602001808311610ce957829003601f168201915b5050505050806020019051810190610d1e91906123c5565b90507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653384604051610d51929190612447565b60405180910390a1610d653415600c611346565b8051610d7d906001600160a01b03163314600d611346565b60208301515115610de557610d9061191e565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260076000554360015551610a2e918391016124ee565b610ded61191e565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260a08085015190840152600a6000554360015551610a2e918391016124ee565b610e526008600054146016611346565b8151610e6d901580610e6657508251600154145b6017611346565b600080805560028054610e7f906120be565b80601f0160208091040260200160405190810160405280929190818152602001828054610eab906120be565b8015610ef85780601f10610ecd57610100808354040283529160200191610ef8565b820191906000526020600020905b815481529060010190602001808311610edb57829003601f168201915b5050505050806020019051810190610f1091906123c5565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051610f439291906125f6565b60405180910390a1610f7681608001518260200151600a8110610f6857610f6861261e565b602002015134146014611346565b8051610f8e906001600160a01b031633146015611346565b80604001518160200151600a8110610fa857610fa861261e565b60200201516001600160a01b03166108fc82608001518360200151600a8110610fd357610fd361261e565b60200201516040518115909202916000818181858888f19350505050158015611000573d6000803e3d6000fd5b506110096119e8565b815181516001600160a01b039091169052602082015161102a906001611470565b602080830180519290925260408085015183519092019190915260608085015183519092019190915260808085015183519092019190915260a08085015183519092019190915290514391015261069381611802565b611090600a60005414601e611346565b81516110ab9015806110a457508251600154145b601f611346565b6000808055600280546110bd906120be565b80601f01602080910402602001604051908101604052809291908181526020018280546110e9906120be565b80156111365780601f1061110b57610100808354040283529160200191611136565b820191906000526020600020905b81548152906001019060200180831161111957829003601f168201915b505050505080602001905181019061114e91906123c5565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516111819291906125f6565b60405180910390a16111b48160a001518260200151600a81106111a6576111a661261e565b60200201513414601c611346565b80516111cc906001600160a01b03163314601d611346565b80604001518160200151600a81106111e6576111e661261e565b60200201516001600160a01b03166108fc8260a001518360200151600a8110610fd357610fd361261e565b611221600960005414601a611346565b815161123c90158061123557508251600154145b601b611346565b60008080556002805461124e906120be565b80601f016020809104026020016040519081016040528092919081815260200182805461127a906120be565b80156112c75780601f1061129c576101008083540402835291602001916112c7565b820191906000526020600020905b8154815290600101906020018083116112aa57829003601f168201915b50505050508060200190518101906112df91906123c5565b90507f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633846040516113129291906125f6565b60405180910390a161132634156018611346565b805161133e906001600160a01b031633146019611346565b6110096119e8565b8161021c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611374611a09565b60005b600a8110156113ce578481600a81106113925761139261261e565b60200201518282600a81106113a9576113a961261e565b6001600160a01b039092166020929092020152806113c68161264a565b915050611377565b50818184600a81106113e2576113e261261e565b6001600160a01b0390921660209290920201529392505050565b611404611a09565b60005b600a811015611450578481600a81106114225761142261261e565b60200201518282600a81106114395761143961261e565b6020020152806114488161264a565b915050611407565b50818184600a81106114645761146461261e565b60200201529392505050565b60008261147d8382612665565b915081101561028d5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611363565b6114c5611a28565b600a8260200151604001511015611564576114de611a61565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518301516060850152815181015160808086019190915291519091015160a0840152600c60005543600155516115409183910161267d565b60405160208183030381529060405260029080519060200190610693929190611964565b80516a757365725f636c61696d7360a81b9052805160006020918201819052825160409081018290528351606090810192909252835183850180519190915284518151909401939093528351835190910152825182519091015281518151608001528151815160a001528151815160c001528151815160e001528151815161010001528151905161012001526115f86118fe565b82515181516001600160a01b03909116905260208084018051518351830152805182015183516040908101919091528551830151838501805191909152858401518151909401939093528251600091015280516060908101518351909101525160809081015191510152610ab6816116bf565b611673611ab2565b60005b600a811015611450578481600a81106116915761169161261e565b60200201518282600a81106116a8576116a861261e565b6020020152806116b78161264a565b915050611676565b600a8160200151604001511015611764576116d8611af9565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840180515160608501528051830151608080860191909152815183015160a08601529051015160c0840152600b6000554360015551611740918391016126e6565b60405160208183030381529060405260029080519060200190610ab6929190611964565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156117a6573d6000803e3d6000fd5b506117af611b43565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840180515160608501525182015160808401526003600055436001555161174091839101612763565b50565b602081015151600a111561187c5761181861191e565b8151516001600160a01b03168152602080830180515182840152805182015160408085019190915281518101516060808601919091528251015160808086019190915291519091015160a084015260066000554360015551611740918391016124ee565b600080805560018190556117ff90600290611b80565b6040518060400160405280600081526020016118ac611bba565b905290565b6040518060400160405280600081526020016118ac60408051808201909152600060208201908152815290565b60405180604001604052806118f1611bcd565b81526020016118ac611bf0565b6040518060400160405280611911611c2b565b81526020016118ac611c4e565b6040805160c0810182526000808252602082015290810161193d611a09565b815260200161194a611ab2565b8152602001611957611a09565b81526020016118ac611a09565b828054611970906120be565b90600052602060002090601f01602090048101928261199257600085556119d8565b82601f106119ab57805160ff19168380011785556119d8565b828001600101855582156119d8579182015b828111156119d85782518255916020019190600101906119bd565b506119e4929150611c6e565b5090565b604080516060810182526000918101918252908152602081016118ac611c83565b604051806101400160405280600a906020820280368337509192915050565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b81526020016118ac611ab2565b6040518060c0016040528060006001600160a01b03168152602001611a84611a09565b8152602001611a91611a09565b8152602001611a9e611a09565b815260200160008152602001600081525090565b604051806101400160405280600a905b604080516080810182526000808252602080830182905292820181905260608201528252600019909201910181611ac25790505090565b6040518060e0016040528060006001600160a01b03168152602001611b1c611a09565b8152602001611b29611a09565b8152602001611b36611a09565b8152602001611a9e611ab2565b6040518060a0016040528060006001600160a01b03168152602001611b66611a09565b8152602001611b73611a09565b8152602001611a54611a09565b508054611b8c906120be565b6000825580601f10611b9c575050565b601f0160209004906000526020600020908101906117ff9190611c6e565b60405180602001604052806118ac611cd1565b604051806040016040528060006001600160a01b031681526020016118ac611a09565b6040518060a00160405280611c03611a09565b8152602001611c10611a09565b81526020016000815260200160008152602001600081525090565b604051806060016040528060006001600160a01b03168152602001611957611a09565b6040518060a00160405280611c61611a09565b8152602001611c10611ab2565b5b808211156119e45760008155600101611c6f565b6040518060c0016040528060008152602001611c9d611a09565b8152602001611caa611ab2565b8152602001611cb7611a09565b8152602001611cc4611a09565b8152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190611cc4565b600060408284031215611d1357600080fd5b50919050565b600060408284031215611d2b57600080fd5b611d358383611d01565b9392505050565b600060c08284031215611d1357600080fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611d8757611d87611d4e565b60405290565b6040805190810167ffffffffffffffff81118282101715611d8757611d87611d4e565b6040516020810167ffffffffffffffff81118282101715611d8757611d87611d4e565b60405160c0810167ffffffffffffffff81118282101715611d8757611d87611d4e565b604051610140810167ffffffffffffffff81118282101715611d8757611d87611d4e565b6001600160e01b0319811681146117ff57600080fd5b600060808284031215611e4257600080fd5b611e4a611d64565b90508135815260208201356020820152604082013560408201526060820135611e7281611e1a565b606082015292915050565b60008060a08385031215611e9057600080fd5b611e9a8484611e30565b946080939093013593505050565b600060208284031215611eba57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015611ef557858101830151858201606001528201611ed9565b81811115611f07576000606083870101525b50601f01601f191692909201606001949350505050565b60008183036040811215611f3157600080fd5b611f39611d8d565b833581526020601f1983011215611f4f57600080fd5b611f57611db0565b9150611f61611db0565b602094850135815282529283015250919050565b600081830360c0811215611f8857600080fd5b611f90611d8d565b8335815260a0601f1983011215611fa657600080fd5b611fae611db0565b9150611fb8611d8d565b611fc58660208701611e30565b815260a094909401356020808601919091529382529283015250919050565b80358015158114611ff457600080fd5b919050565b6000818303604081121561200c57600080fd5b612014611d8d565b8335815291506020601f198201121561202c57600080fd5b506040516020810181811067ffffffffffffffff8211171561205057612050611d4e565b60405261205f60208401611fe4565b8152602082015292915050565b60006040828403121561207e57600080fd5b611d358383611ff9565b60006040828403121561209a57600080fd5b6120a2611d8d565b823581526120b260208401611fe4565b60208201529392505050565b600181811c908216806120d257607f821691505b60208210811415611d1357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114611ff457600080fd5b600082601f83011261211b57600080fd5b612123611df6565b8061014084018581111561213657600080fd5b845b81811015612150578051845260209384019301612138565b509095945050505050565b600082601f83011261216c57600080fd5b612174611df6565b8061014084018581111561218757600080fd5b845b818110156121505761219a816120f3565b845260209384019301612189565b600061042082840312156121bb57600080fd5b6121c3611dd3565b6121cc836120f3565b81526121db846020850161210a565b60208201526121ee84610160850161215b565b6040820152612201846102a0850161210a565b60608201526103e083015160808201526104009092015160a083015250919050565b600082601f83011261223457600080fd5b61223c611df6565b8061050084018581111561224f57600080fd5b845b81811015612150576080818803121561226a5760008081fd5b612272611d64565b81518152602080830151818301526040808401519083015260608084015161229981611e1a565b9083015290855290930192608001612251565b600061092082840312156122bf57600080fd5b60405160e0810181811067ffffffffffffffff821117156122e2576122e2611d4e565b6040526122ee836120f3565b81526122fd846020850161215b565b602082015261231084610160850161210a565b6040820152612323846102a0850161210a565b6060820152612336846103e08501612223565b60808201526108e083015160a08201526109009092015160c083015250919050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b600060e08201905060018060a01b0384168252825160208301526020830151516123b3604084018251612358565b602081015160c0840152509392505050565b600061090082840312156123d857600080fd5b6123e0611dd3565b6123e9836120f3565b815260208301516020820152612402846040850161215b565b6040820152612415846101808501612223565b606082015261242884610680850161210a565b608082015261243b846107c0850161210a565b60a08201529392505050565b6001600160a01b038316815260608101611d35602083018480518252602090810151511515910152565b8060005b600a8110156106935781516001600160a01b0316845260209384019390910190600101612475565b8060005b600a811015610693576124b5848351612358565b60809390930192602091909101906001016124a1565b8060005b600a8110156106935781518452602093840193909101906001016124cf565b81516001600160a01b031681526020808301519082015260408083015161090083019161251d90840182612471565b50606083015161253161018084018261249d565b5060808301516125456106808401826124cb565b5060a08301516125596107c08401826124cb565b5092915050565b60006108e0828403121561257357600080fd5b60405160a0810181811067ffffffffffffffff8211171561259657612596611d4e565b6040526125a2836120f3565b81526125b1846020850161215b565b60208201526125c484610160850161210a565b60408201526125d7846102a0850161210a565b60608201526125ea846103e08501612223565b60808201529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561265e5761265e612634565b5060010190565b6000821982111561267857612678612634565b500190565b81516001600160a01b031681526020808301516104208301916126a2908401826124cb565b5060408301516126b6610160840182612471565b5060608301516126ca6102a08401826124cb565b5060808301516103e083015260a0909201516104009091015290565b81516001600160a01b0316815260208083015161092083019161270b90840182612471565b50604083015161271f6101608401826124cb565b5060608301516127336102a08401826124cb565b5060808301516127476103e084018261249d565b5060a08301516108e083015260c0909201516109009091015290565b81516001600160a01b031681526020808301516108e083019161278890840182612471565b50604083015161279c6101608401826124cb565b5060608301516127b06102a08401826124cb565b5060808301516125596103e084018261249d56fea2646970667358221220fce15325e910a13983c8eb783642f9f5f2b3b02f491ccf2ed672b3ec3805ebd964736f6c634300080c0033`,
  BytecodeLen: 13079,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  3: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:110:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:81:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:87:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:91:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:98:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:45:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:23:62:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Insurance_company": Insurance_company,
  "Subscribers_Submit_claim": Subscribers_Submit_claim,
  "Subscribers_Subscribe": Subscribers_Subscribe
  };
export const _APIs = {
  Subscribers: {
    Submit_claim: Subscribers_Submit_claim,
    Subscribe: Subscribers_Subscribe
    }
  };
