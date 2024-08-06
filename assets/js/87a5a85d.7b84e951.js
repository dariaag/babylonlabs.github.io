"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1238],{8765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(4848),i=t(8453);const o={id:"babylondgentx",sidebar_label:"babylond gentx",hide_table_of_contents:!0},s="babylond gentx",r={id:"cli/babylond/babylondgentx",title:"babylond gentx",description:"Generate a genesis transaction by a specified key name, an amount that establishes a validator with a self-delegation signed by the reference key on the keyring. The genesis transaction is retrieved from the priv _validator.json file.",source:"@site/docs/cli/babylond/babylondgentx.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylondgentx",permalink:"/docs/cli/babylond/babylondgentx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/babylondgentx.md",tags:[],version:"current",frontMatter:{id:"babylondgentx",sidebar_label:"babylond gentx",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond export",permalink:"/docs/cli/babylond/babylondexport"},next:{title:"babylond help",permalink:"/docs/cli/babylond/babylondhelp"}},d={},l=[{value:"gentx command",id:"gentx-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"babylond-gentx",children:"babylond gentx"}),"\n",(0,a.jsx)(n.p,{children:"Generate a genesis transaction by a specified key name, an amount that establishes a validator with a self-delegation signed by the reference key on the keyring. The genesis transaction is retrieved from the priv _validator.json file."}),"\n",(0,a.jsx)(n.h2,{id:"gentx-command",children:"gentx command"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"babylond gentx [key_name] [amount] [flags]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'  -a, --account-number uint                 The account number of the signing account (offline mode only)\n      --amount string                       Amount of coins to bond\n      --aux                                 Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string               Transaction broadcasting mode (sync|async|block) (default "sync")\n      --chain-id string                     The network chain ID\n      --commission-max-change-rate string   The maximum commission change rate percentage (per day)\n      --commission-max-rate string          The maximum commission rate percentage\n      --commission-rate string              The initial commission rate percentage\n      --details string                      The validator\'s (optional) details\n      --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                  Fee granter grants fees for the transaction\n      --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                         Fees to pay along with transaction; eg: 10uatom\n      --from string                         Name or address of private key with which to sign\n      --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                help for gentx\n      --home string                         The application home directory (default "/home/kakakepan/.babylond")\n      --identity string                     The (optional) identity signature (ex. UPort or Keybase)\n      --ip string                           The node\'s public IP (default "192.168.103.91")\n      --keyring-backend string              Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string                  The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                              Use a connected Ledger device\n      --min-self-delegation string          The minimum self delegation required on the validator\n      --moniker string                      The validator\'s (optional) moniker\n      --node string                         <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --node-id string                      The node\'s NodeID\n      --note string                         Note to add a description to the transaction (previously --memo)\n      --offline                             Offline mode (does not allow any online functionality)\n  -o, --output string                       Output format (text|json) (default "json")\n      --output-document string              Write the genesis transaction JSON document to the given file instead of the default location\n      --pubkey string                       The validator\'s Protobuf JSON encoded public key\n      --security-contact string             The validator\'s (optional) security contact email\n  -s, --sequence uint                       The sequence number of the signing account (offline mode only)\n      --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string                      The validator\'s (optional) website\n  -y, --yes                                 Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(n.h2,{id:"options-inherited-from-parent-commands",children:"Options Inherited from Parent Commands"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'--log_format string   The logging format (json|plain) (default "plain")\n--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n--trace\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);