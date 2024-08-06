"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[913],{1244:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=n(4848),i=n(8453);const o={id:"babylond_tx_distribution_withdraw-all-rewards",sidebar_label:"babylond tx distribution withdraw-all-rewards",hide_table_of_contents:!0},r="babylond tx distribution withdraw-all-rewards",d={id:"cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-all-rewards",title:"babylond tx distribution withdraw-all-rewards",description:"Withdraw all delegations rewards for a delegator.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_withdraw-all-rewards.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_distribution",slug:"/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-all-rewards",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-all-rewards",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/Babylond_tx_distribution_withdraw-all-rewards.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_distribution_withdraw-all-rewards",sidebar_label:"babylond tx distribution withdraw-all-rewards",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx distribution withdraw-rewards",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_distribution/babylond_tx_distribution_withdraw-rewards"},next:{title:"babylond tx encode",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_encode"}},s={},l=[{value:"tx distribution withdraw-all-rewards command",id:"tx-distribution-withdraw-all-rewards-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}];function c(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"babylond-tx-distribution-withdraw-all-rewards",children:"babylond tx distribution withdraw-all-rewards"}),"\n",(0,a.jsx)(e.p,{children:"Withdraw all delegations rewards for a delegator."}),"\n",(0,a.jsx)(e.h2,{id:"tx-distribution-withdraw-all-rewards-command",children:"tx distribution withdraw-all-rewards command"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"babylond tx distribution withdraw-all-rewards [flags]\n"})}),"\n",(0,a.jsx)(e.h3,{id:"example-command",children:"Example Command"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"$ <appd> tx distribution withdraw-all-rewards --yes\n"})}),"\n",(0,a.jsx)(e.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for withdraw-all-rewards\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --max-msgs int             Limit the number of messages per tx (0 for unlimited)\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(e.h2,{id:"options-inherited-from-parent-commands",children:"Options Inherited from Parent Commands"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n'})})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var a=n(6540);const i={},o=a.createContext(i);function r(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);