"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2868],{9417:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(4848),i=t(8453);const a={id:"babylond_tx_checkpointing_submit",sidebar_label:"babylond tx checkpointing submit",hide_table_of_contents:!0},s="babylond tx checkpointing submit",r={id:"cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",title:"babylond tx checkpointing submit",description:"Submit a BLS signature.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/Babylond_tx_checkpointing_submit.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_checkpointing",slug:"/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_submit",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/Babylond_tx_checkpointing_submit.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_checkpointing_submit",sidebar_label:"babylond tx checkpointing submit",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx checkpointing create-validator",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_checkpointing/babylond_tx_checkpointing_create-validator"},next:{title:"babylond tx crisis",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_crisis"}},c={},d=[{value:"tx checkpointing submit command",id:"tx-checkpointing-submit-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"babylond-tx-checkpointing-submit",children:"babylond tx checkpointing submit"}),"\n",(0,o.jsx)(e.p,{children:"Submit a BLS signature."}),"\n",(0,o.jsx)(e.h2,{id:"tx-checkpointing-submit-command",children:"tx checkpointing submit command"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"babylond tx checkpointing submit [epoch_number] [last_commit_hash] [bls_sig] [signer address] [flags]\n"})}),"\n",(0,o.jsx)(e.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/kakakepan/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "babylond tx checkpointing [command] --help" for more information about a command.\nkakakepan@DESKTOP-58G3HHU:/mnt/c/Users/kakakepan/Documents/Babylond/babylon$ ./build/babylond tx checkpointing create-validator\npanic: could not create directory "": mkdir : no such file or directory\n\ngoroutine 1 [running]:\ngithub.com/tendermint/tendermint/config.EnsureRoot({0x0, 0x0})\n        github.com/tendermint/tendermint@v0.34.24/config/toml.go:35 +0x1f6\ngithub.com/cosmos/cosmos-sdk/server.interceptConfigs(0xc000feb520, {0x2228f87, 0x2ae1}, {0x1ec6660, 0xc0014ed8c0}, 0xc00016cf00)\n        github.com/cosmos/cosmos-sdk@v0.46.6/server/util.go:204 +0x354\ngithub.com/cosmos/cosmos-sdk/server.InterceptConfigsPreRunHandler(0x0?, {0x2228f87, 0x2ae1}, {0x1ec6660, 0xc0014ed8c0}, 0x0?)\n        github.com/cosmos/cosmos-sdk@v0.46.6/server/util.go:137 +0x305\ngithub.com/babylonlabs-io/babylon/cmd/babylond/cmd.NewRootCmd.func1(0xc000fb0900, {0x1?, 0x2bbbeb0?, 0x1?})\n        github.com/babylonlabs-io/babylon/cmd/babylond/cmd/root.go:79 +0x2ae\ngithub.com/tendermint/tendermint/libs/cli.concatCobraCmdFuncs.func1(0xc000fb0900?, {0x3cc75e0, 0x0, 0x0})\n        github.com/tendermint/tendermint@v0.34.24/libs/cli/setup.go:118 +0x62\ngithub.com/spf13/cobra.(*Command).execute(0xc000fb0900, {0x3cc75e0, 0x0, 0x0})\n        github.com/spf13/cobra@v1.6.0/command.go:891 +0x739\ngithub.com/spf13/cobra.(*Command).ExecuteC(0xc0004e6c00)\n        github.com/spf13/cobra@v1.6.0/command.go:1040 +0x3bd\ngithub.com/spf13/cobra.(*Command).Execute(...)\n        github.com/spf13/cobra@v1.6.0/command.go:968\ngithub.com/spf13/cobra.(*Command).ExecuteContext(...)\n        github.com/spf13/cobra@v1.6.0/command.go:961\ngithub.com/cosmos/cosmos-sdk/server/cmd.Execute(0xdd3c638e3ea023cf?, {0x0, 0x0}, {0xc001133a00, 0x19})\n        github.com/cosmos/cosmos-sdk@v0.46.6/server/cmd/execute.go:36 +0x20f\nmain.main()\n        github.com/babylonlabs-io/babylon/cmd/babylond/main.go:18 +0x35\nkakakepan@DESKTOP-58G3HHU:/mnt/c/Users/kakakepan/Documents/Babylond/babylon$ ./build/babylond tx checkpointing create-validator -p\nError: unknown shorthand flag: \'p\' in -p\nUsage:\n  babylond tx checkpointing create-validator [flags]\n\nFlags:\n  -a, --account-number uint                 The account number of the signing account (offline mode only)\n      --amount string                       Amount of coins to bond\n      --aux                                 Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string               Transaction broadcasting mode (sync|async|block) (default "sync")\n      --commission-max-change-rate string   The maximum commission change rate percentage (per day)\n      --commission-max-rate string          The maximum commission rate percentage\n      --commission-rate string              The initial commission rate percentage\n      --details string                      The validator\'s (optional) details\n      --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                  Fee granter grants fees for the transaction\n      --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                         Fees to pay along with transaction; eg: 10uatom\n      --from string                         Name or address of private key with which to sign\n      --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                help for create-validator\n      --home string                         The node home directory\n      --identity string                     The optional identity signature (ex. UPort or Keybase)\n      --ip string                           The node\'s public IP. It takes effect only when used in combination with --generate-only\n      --keyring-backend string              Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string                  The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                              Use a connected Ledger device\n      --min-self-delegation string          The minimum self delegation required on the validator\n      --moniker string                      The validator\'s name\n      --node string                         <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --node-id string                      The node\'s ID\n      --note string                         Note to add a description to the transaction (previously --memo)\n      --offline                             Offline mode (does not allow any online functionality)\n  -o, --output string                       Output format (text|json) (default "json")\n      --pubkey string                       The validator\'s Protobuf JSON encoded public key\n      --security-contact string             The validator\'s (optional) security contact email\n  -s, --sequence uint                       The sequence number of the signing account (offline mode only)\n      --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string                      The validator\'s (optional) website\n  -y, --yes                                 Skip tx broadcasting prompt confirmation\n\nGlobal Flags:\n      --chain-id string     The network chain ID\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nkakakepan@DESKTOP-58G3HHU:/mnt/c/Users/kakakepan/Documents/Babylond/babylon$ ./build/babylond tx checkpointing submit -y\nError: accepts 4 arg(s), received 0\nUsage:\n  babylond tx checkpointing submit [epoch_number] [last_commit_hash] [bls_sig] [signer address] [flags]\n\nFlags:\n  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(e.h2,{id:"options-inherited-from-parent-commands",children:"Options Inherited from Parent Commands"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n'})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);