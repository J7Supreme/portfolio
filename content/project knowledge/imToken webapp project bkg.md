Product positioning
Like Kindle for books, people use Kindle to read and enjoy e-books anytime, anywhere,

the target audience will utilize the imToken web app to read and enjoy tokens (digital currency and more) anytime, anywhere.

 

What is imToken web app?
IS

a web portal to token

light-weight application

explorer interface to tokens and blockchain

internet required

--- vs ---------------------

NOT

just another crypto wallet

static website

key manager

pre-install required

 

Survey
附图是我写的 WebApp 产品定位的草稿， 基于当前的定义定性，大家帮忙来挑选一个合适的域名给它。

1️⃣  app.token.im  or token.im/app

✅  web.token.im  or token.im/web (voted this option)

3️⃣  hub.token.im  or token.im/hub

4️⃣  home.token.im  or token.im/home

5️⃣  submit your idea (提交你的想法）

关于更多信息了解，请访问 wiki 文档

 

Hosted domain
DNS: web.token.im

ENS:  web.token.eth 

 

In dev 抢先测试与体验

测试环境地址 https://home-of-token-web-test.vercel.app/claims

UAT 地址 https://home-of-token-web.vercel.app/claims

 

 

The Purpose

The Perfect Token Journey
打造「完美」的 Token 旅程

 

动机与触点

 

旅程与体验

 

视觉与交互

 

数据与信息

 

 Status Quo
 

Traditional world

You can’t send money to someone who don’t have an account yet.

Wechat user can’t send to PayPal user.

Filipino maid pays high fees to send money back home.

 

Crypto space

You can’t send tokens to someone who don’t have a wallet yet.

You can’t send tokens via web2 channels.

You can’t claim tokens without holding native token to pay the gas fee.

 

New Proposal
Send via Link

Sender generate a claimable link;

The link can be sent to the receiver in any ways, eg. message, email, QR-code…

Receiver click link to claim the tokens by creating a permissionless account just in time.

that achieves anyone can send tokens to anyone without authority.

 

Solution Design
 

Actor

Scenario

Flowchart

Token Distributor

As ABC project owner,

Bob provides 10K ABC tokens to distribute 5 ABC to each new user who is eligible to claim.

his expectation is to onboard 2000 ABC token holders. 

 


 

Sender

As sender,

Bob wants to send 88 ABC tokens to Alice,

he chooses send via link way as Alice is new comer to crypto.

 

 

Inviter

As inviter,

Bob wants to invite Alice to try out the token utilities,

he send her 10 USDT claimable link via WhatsApp.

Alice clicks the link and get the token to play with.

 

 

Vision
The imToken vision we set,

from kids to seniors, as long as you have internet to browse,

you always have equal access to the tokenized world. That’s the technology and design empowered freedom to every human being.

3.0 Vision
 

Just-in-time Access
In the early days of the mobile internet era, users would install hundreds or even thousands of apps on their smartphones. However, over time, that number has decreased to just a few dozen, many of which are now built-in features. Platform lock-in undermined the open internet.

 

And as new VR/AR devices are emerging, we’d explore in advance for the future ready UI to access blockchain and the token economy. 

 

A just-in-time access capability is promising direction we start crafting now.

Put in a simple line: Web browser + Internet connection = Access from anywhere.

 

Design
Original open internet
User from anywhere,

can visit https://token.im or https://token.eth ,

to access the information, products and services.

No specific device required

No platform dependance

No centralized provider needed

No authority permissions

 

New functions to internet
Blockchain network is built on top of original internet and adds the trustless social coordination layer which transform the information internet becoming value internet. 

There are many primitives that Blockchain technology brought to internet, token as unit of value, is the most novel one. A piece of code to present intrinsic value, we recognise it as new data format besides text, image, audio, video.

 

At this point of view, we can tell token functions are the new functions to the internet.

 

Token Functions
How to craft the UI of token functions that empower individuals?

 

UI pattern
 

Interaction flow
 

 

Data modelling
Defined here https://imtoken.atlassian.net/wiki/x/mQBfXw
 

 Problem statement
User lost tracking of his/her tokens due to:

Too many wallets and accounts created here and there, some of them vanished in memory;

Too many chains and networks that the tokens flow into and no place to consolidate them together;

Some tokens deposited into smart contracts or centralized wallets are hard to track;

Can’t identify the difference between tokens that issued, wrapped and bridged in different network.

 

Analysis by product aspects 
Reference: The Visual Workspace | Whimsical
 

Screenshot & recording: Portfolio 
 

Aspect

Do check mark button 

Don’t cross mark 

General

Onboarding

Website

clear & concise introduction

clear CTA + how-to-do explanation

clear value proposition - value brought to the user

(Morein in the following table)

Ways to connect with the portfolio 

e.g. Wallet connect to show assets in imToken wallet

Connect with other wallet to show assets in these wallets (coinbase / OKX, etc.)

Connect with CEX  (coinbase / OKX, etc.)

Manage wallets to be import, watched, and linked


⬇️ Example


Web page too long, too many to read, too many features but didn’t mention the value of the features


🚨 Too many features


Using jargons that newbies don’t understand

Portfolio

(Status)

Overall summary


⬇️ Example


Hide assets that less than X (e.g. 100 USD)

Portfolio performance

e.g. green color with positive asset growth is encouraging

Portfolio breakdown

Token breaking down to chains (ETH on Arb, OP, etc.)

Chain breaking down to tokens

Asset breaking down to defi (% in wallet, % in Lido, etc.)


⬇️ Example







🟨 IDEA

Risk asset warning 


⬇️ Example


Listed all the details but not able to see an overview

Asset performance

(Changes over time)

How does a specific asset perform (since beginning)

How does a specific asset perform, over time & over different period of time

History - actions taken over time 

Filtered actions / tokens, e.g. show only “trade action history“ or “stETH“

Average price of buy the specific token

Export to other formats, e.g. csv

What else can the user do to utilize the assets?

Regulat quick snippet (e.g. daily / weekly update)

Event triggered (when X asset changes Y%)

Selective account/ wallet / token / chain / profile to present the asset referring assets.


⬇️ Example - Wallet logo



🟨 No many services provide this information

Cross platform

Support mobile / desktop / app / web

Optimize for mobile (on-the-go)

Portfolio change / peek

Notification

Optimize for desktop (serious & detail)

Optimize for web vs app

 

Compatibility

Supported many Chain / Token / dapp / defi, etc.

For those not supported, user can easily hop to the legit external page

Present what are supported / and not supported projects or chains. So if a specific chain data can’t be extracted, user can recognize the missing part. 


🟨 IDEA

Explain why, when not able to extract info for the specific dapp 

Present extracted dapp information in a comprehensive way

Listed out everything without an easy way to find out what is important.


⬇️ Example


UX

Visualizing information meaningfully

Error handling - when it’s not going as how it was expected, showing a clear message and how the user can/should react to the situation

Contextual educational materials - when the user explore to a specific page but not having relavant data to present, explain what to expect with a CTA for user to take action directly

Upselling - help the user to explore things they might be interested (linked with actions in wallet)

Default vs Setting - carefully design default ser-up, but allow users to customize if some of them have different preference. E.g. How ofter do to receive asset update

Filter - Crypto structure is complex. If the user knows that he has assets only on specific chains, he can decide to see only assets on these chains and hide other chains. Or the user can see only specific type of transaction.

Frequency of not able to extract information from chain, from defi service, etc. When that happened too often, may consume user trust.

New to Crypto

Web2 log-in

Ways that web 2 users are familiar with. e.g. Google account, FB, Passkey, Apple ID, CEX account  etc.


⬇️ Example


 

Education material 

When Newbie user explore to areas that they are not eligible to see any content, e.g. revoke connection page when the user didn’t connect with any dapp, explain to them what can they do, and what can they expect in this area/page.


⬇️ Example



Share educational material in context, explain terminology when they need to know.  

Help user to enter Dapp world

Start from entry level defi services, not the advanced ones

 

Crypto User

Tokens

Token introduction, e.g. PnL in the past, team behind the token / project.

Utility - How can the holder utilize the particular token, or what else more can the user do to start using this token

 

News / Market information

Help users to select meaningful news, for example:

Filter, e.g. Top 100 TVL

Specific categories, e.g. top mover, meme, AI, etc.

Smart money

 

Market insight

Topic / Token / Chain report 

Relevant CTA in the context, e.g. after read the report, if the user agree with the report, he can buy/sell specific token

 

Interested news

(Personalized)

News or report relate to user owned asset

Connecting assets with the news / report

User can actively follow or favourite specific topic, chain, or topic


⬇️ Example



 

Advance crypto user

Interact w/ Dapps

More specific detail on the dapps

Simplify information in meaningful ways

 

Multiple wallets

Advance users are more likely to have multiple wallets

Allow them to edit name of the wallets, e.g. different purpose

Allow them to view specific wallet’s portfolio

Allow them to filtering out meaningful information

Hide noise (scam, small assets, etc.)

 

Banking + crypto user (Traditional finance)

Combine with other services

(brokers, banks, etc.)

If the user invest in traditional finance services too, how does crypto perform in the overall portfolio

Different assets' performance and asset efficiency

Usually Crypto is a relative small part of the portfolio

Also more effort on linking with traditional services, e.g. banks, brokers, etc.

Other

Other topics

Bug report

Feature request

Categorize requests

Link to request pool

Connect with Product roadmap


⬇️ Example


NFT

Game

Meaningful sharing to social media

Dark mode


🚨 To many to set up


Current solutions
Product

Strength

Weakness

Positioning/GTM

Zerion

Stable, clearer structure, relatively comprehensive presentation UI, good level of extract dapps / protocols

Provide mobile service 

n/a

Current crypto users would be more familiar with

Zapper

Similar with Zerion but more stress on market news

End users are not easy to find Zapper as a portfolio tool from the start, as it marked as an API tool form google search.

Metamask portfolio

Users who are familiar with crypto wallet services would be quite easy to adopt to.

Common actions are covered.

Good usability, set right expectations, clear status and materials to hand hold users

Covered areas like explore, NFT, Game etc. a quite good gate to enter crypto field in general

Some protocol / dapps didnt fully extract data and present to the user.

Combine with common crypto actions, etc. stake, explore, bridge, swap, etc.

Nansen

Massive report from it’s main service can refer to if the user is a paid member.

Hugh list of supported protocol 

Good visual to present overview of the portfolio

For newbie user, might be quite overwhelming. 

Adding value on reports and market insights. Might be helpful for advance users. But quite overwhelming for beginninger.

CMC portfolio

Leverage the strength if crypto market data, e.g. Chain info, token info, topic (meme coin  AI coin, etc.)

For people who started their crypto journey from understanding tokens & projects, might be easier for them to start trying “portfolio“ from CMC as CMC has higher exposure to mass market. 

Level of accuracy and stability is quite low. QWhich is critical for a portfolio tool.

Taking advantage on the main area of token and chain info service provider. 

But very unstable on extracting on-chain data for multiple wallets.

Delta App

Covered with traditional finance services

Easier for mass market to start trying crypto by converting crypto portfolio to overall financial portfolio of the user. 

Very limited function for crypto info extraction.

For the traditional financial investors (in this case eToro’s users), might be easier to enter crypto world.

But to limited for crypto-primary users. 

Etherscan multichain portfolio

Might be earier to support ETH-family network and EVM.

Assuming data accuracy & quality will be better comparing to other services. 

Lack of info of user interact with dapps from the address.

Compatibility with other chains.

Lacking of a interface for ordinary user to interact with by specific requirement, e.g. figure to understand the overview, show understandable info by token, by address, by position, etc.

Might be familiar for developers, as they have been using the tool since the beginning. 

 

 

 

 

Solution Design
 

 中文：让 Token 触手可及

image-20241008-152616.png
Screenshot - 2024-10-08 23.28.12.png
snapshot of crypto market on 2024.10.8
Motivation
Some facts about tokens

There are millions of tokens and still growing fast.

though many of them are hardly have intrinsic value and will die eventually.

but the most booming stage of tokenization hasn’t come yet.

No one could digest so many tokens and their related information.

Token is inevitable to people, just like money, electricity and internet applications.

 

So we want to build product for 

bringing tokens to people

making tokens organised

not missing important information

 

How-to Design
by answering those critical questions, we can dig out our way to solutions. 

1. How to present?
for helping user to identify tokens in a consistant way: shape, colour, geometry, pattern, animation… 

Presentation of Token

design ideas

3D and 2D, share common characteristic

Based on and elaborate from brand book

Mark ( company logo, token icon ) integrated as uni-body

Can see, can touch, can feel

 

 

Different kinds of Token

design ideas

Fungile token, eg. ERC20

Non-fungible token, eg. ERC721

Non-transferable token, eg. SoulBound token

…new kinds 

 

 

 

imToken “Badge”

design ideas

A eye-catcy, brand-identifiable imToken badge to drive users to the “token page”. Below is an illustration of the direction, subject to further exploration with critical elements:

imToken logo

token presenation

meaningful linkage between them

intuitive and easily recognizable to users (similer to fb, X badge)

 

 

2. How to organise? 
 

Token Collection

 

3. How to communicate?
 

Intelligent Message (IM)

 项目背景
用户产品流程简介
Claim Token
Explore Token
Collection定义
Explore Token交互
Token Details & Actions
Token Details
Token Actions
详细的Use Cases及User Story
Use Cases列表
其他整体需求情况
设计稿
详细的User Story
Claim Tokens - 后端
Claim Tokens
Explore Tokens - 后端
Explore Tokens
Token Details & Actions
Appendix
 

注：该文档原起草人 Jiadong 已离职(2024.9.27), 部分内容与 10 月之后的最新状态有所脱节。

有几个对齐信息的优先规则，可以采纳：

以 Jira 正在进行中的任务描述为优先，

以 Part-C 部分最新内容为优先，

如果不同的内容材料上，有冲突性的信息，请评论文档并 @yujia.duan (Unlicensed)  @Ben He 

项目背景
团队基于面向2024 DevCon进行产品创新以及宣发的角度，起草了Home of Token (Web App)项目。具体背景参考立项资料。
007 Hub-Brand: Home of Tokens Web App ( Devcon version )
 

当前文档作为PRD-Part B，希望对立项资料中涉及到的功能进行详细梳理和拆分。提供具体的User Story给到技术同学来推进开发任务。

用户产品流程简介
梳理用户使用 Home of Token的主要流程，后续进行use case的拆分。在进入具体流程之前，先大致说明一下涉及到的系统范围，方便理解用户场景。

Home of Token产品文档 (3).png
The Visual Workspace | Whimsical
 

以下功能板块参照Project Charter进行拆分，分别为：

Claim Token

Explore Token

Token Details & Actions

Claim Token

The Visual Workspace | Whimsical
 

上图展示了完整的Claim Token的生命周期，其中主要包括：

Claim活动的创建和准备工作

用户如何参与这个活动

后续会对其中的具体板块进行详细拆分成为不同的Use Cases和User Story。

Explore Token
Explore的场景没有固定的交互流程，用户可以自由探索。Explore的功能核心内容为Collections，Collections决定了具体的数据内容，后续的交互也会围绕着Collections来设计。

Collection定义
Collection的整体定义为通过不同的维度对Token进行归组，方便信息的归集和展示。具体的Collection分为2类：

imToken系统定义Collection：

数据的底层基建会收集关于Token的各种不同维度信息

imToken需要提供后台或其他配置方式，允许内部操作员根据不同维度以及逻辑来归集这些Token，定义成为官方的Collection

用户定义Collection：

展示数据基建收集到的Token的不同维度信息进行展示

用户可以根据上述的维度自定义逻辑来归集这些Token，命名成为自己想要关注的Collection

Explore Token交互
Explore Token页面会在同一个页面展示多个Collection，然后吸引用户去查看以及了解更多Token信息。为了满足用户的不同诉求，会需要有不同视窗（View）的展示来展示Collections。这里大致定义主要的View，未来还会在这个基础上进行添加：

Default View

通过系统定制的算法，选取最适合当前用户查看的Collections

个人Collection View

展示用户自己定义的Collections

 

image-20240827-065132.png
 

Token Details & Actions
Token Details
Token Details页面会展示当前选中Token相关的信息，目的是为了提供足够的信息让用户了解Token的整体状态，并且产生交易动机。具体需要展示的Token Details内容会在User Story中进行定义。

Token Actions
在Token Details页面上也会展示当前Token可以进行的Action。主要分为3种Token Actions及交互方式：

功能属性

功能交互方式

具体功能

1	
基础且频繁使用的功能

在Token Details页面内提供原生路径，辅助用户最快速度完成

Send

Receive

2	
内部业务线提供的功能更，可以提供定制化集成

在Token Details页面集成内部工具提供的组件，通过组件集成完成交互

Swap

Pay

3	
外部Dapp服务

通过Token Details页面进行独立窗口渲染等方式引导用户完成流程

Other Dapps

 

 

详细的Use Cases及User Story
Use Cases列表
基于上述内容的大致整理，这里列举完整的use cases:

User Flow

Use Cases

Priority

1	
Claim Token - 后端

Home of Tokens 系统支持资金账户管理活动资金，创建和管理Claim Token活动

p0
 

2	
Claim Token

用户通过点击活动链接或者扫描QR Code完成Claim Token流程

新老用户区分

p0
  

3	
Explore Token - 后端

Home of Token系统收集并且标记Token的不同维度，支持配置不同类型的Collections

业务规则配置

p0
  

4	
Explore Token

用户可以在Home of Tokens 页面查看多种Collections

区分登录/未登录状态和展示逻辑

p0
  

5	
支持用户可以自定义Collections来归类Token

支持用户筛选不同的视窗View来刷新Home of Token的信息展示

p1
 

6	
Home of Tokens 中支持AA钱包的独立注册流程

p0
  

7	
Home of Tokens 中支持AA钱包登录/登出

p0
  

8	
Token Details & Actions

Token Details页面展示和Token相关的详情

p0
  

9	
Token Detail页面提供当前Token可以进行的基础操作

Send

Receive

p0
  

10	
交易详情页面

 

11	
Token Detail页面支持用户通过Tokenlon组件进行Token Swap

p0
  

12	
Token Detail页面支持用户通过RIVO组件进行Token Pay

p0
 ？

13	
Token Detail页面支持配置来支持打开其他Dapp并且交互

p0
 
p1
 ?

14	
Portfolio页面

Portfolio页面

 

其他整体需求情况
设备支持：

Mobile (优先)

Desktop

公链支持（Claim Token/AA/Pay）：

？

AA多链支持

一条链上之创建一个AA钱包

多链的钱包地址保持一致

Claim Token的活动支持代币：

LON？

TBD

设计稿
https://www.figma.com/design/lRehKMnavslpfPccwbYD1B/Home-of-tokens-explore?node-id=564-1506&t=PLPphk85FpVdndjI-1
 

详细的User Story
Claim Tokens - 后端
这里将上述流程中后台处理的部分进行详细拆分

User Story

优先级

具体步骤及逻辑

Jira Ticket

1	
作为一个imToken Admin

我希望Home of Token的后台可以支持我进行账户的注册和登录

这样只有有权限的账户才可以进行登录和操作

p1
  

支持注册内部员工Email为管理员权限。支持有效的权限管理机制（如密码，IP等）

 

2	
作为一个imToken Admin
我希望Home of Token系统可以支持创建和管理一个钱包地址然后让合作伙伴将Claim活动资金转入
这样后台系统可以管理活动使用的资金并且方便我后续去创建Claim活动
p0
  

Home of Token系统托管一个钱包资金账户，私钥由平台代管

支持Home of Token业务场景需要支持的链， TBD

活动管理人员可以根据Claim活动要使用的Token获取Home of Token后台托管钱包的地址

活动管理人员将和合作方沟通，要求他们将Claim活动使用的Token打入后台托管的地址

Home of Token系统读取钱包的资产，确认资产到账

https://imtoken.atlassian.net/browse/R2D2-12156
 

3	
作为一个imToken Admin
我希望Home of Token系统可以支持使用已经收到的Token资产去创建和管理Claim活动
这样我可以更好的了解Claim活动的状态并进行管理
p0
  

 

Claim活动一共有以下状态：

Draft状态

新创建的活动为当前状态

Active状态

Draft状态的活动正式提交之后为Active状态

End状态

Active状态的活动手动或者自动结束之后为End状态

Cancel状态

Draft状态的活动直接被遗弃则为Cancel状态

Claim活动创建

系统支持创建一个新的Claim活动，具体参数为：

Claim活动名称

Claim活动使用的Token

目前一个活动只支持一个Token

只能选择Home of Token后台托管钱包中已有的Token

确认Claim活动使用的Token所在的链

Claim活动的总领取人数

Claim活动的每人领取Token数量

自动计算活动总预算，不可编辑

总预算=总人数 * 每人领取Token数量

Claim活动的时间区间

开始日期，开始时间，精确到分钟

结束日期，结束时间，精确到分钟

上述参数确认之后可以提交，提交之后Claim活动创建成功。创建成功之后的活动为Draft状态

托管钱包中的对应Token进入占用状态，不可以被新的Claim活动使用

系统自动生成Unique活动ID

Draft状态的活动并不会生效，需要正式启动才会开始处理Claim活动

Claim活动开始

Draft状态的活动可以被正式启动，状态变更成为Active状态

正式启动需要进行弹窗确认

Active状态的活动需要在活动设置的时间区间内，才会正式运行

如果还未到生效时间，则进入生效时间后自动运行

如果超出结束时间，则活动停止

正在Active状态的活动可以修改活动的时间区间

Claim活动结束

Active状态的活动可以被修改成为End

End状态的活动不可以再进行编辑

Claim活动取消

Draft状态的活动可以修改成为Cancel

Cancel状态的活动不可以再进行编辑

 https://imtoken.atlassian.net/browse/R2D2-12181
 

4	
作为一个imToken Admin
我希望Home of Token的针对Active的活动可以分享活动的链接
这样我可以结合其他的宣发模式引导用户来参加这个活动
p0
  

针对在Active状态的Claim活动，允许imToken Admin去得到活动链接，这个分享信息会带用户进入到Claim Token的流程中，跟随流程可以完成领取Claim活动设置的奖励

链接由两部分组成

[静态] Claim Token的Landing Page的Root URL + [动态] Claim活动的ID

如果是Copy每一个Claim活动的链接的话，ID部分会变化

https://imtoken.atlassian.net/browse/R2D2-12182
 

5	
作为一个imToken Admin
我希望Home of Token的针对Active的活动生成的链接可以以QR Code以及NFC设备的形式进行展示
这样我可以结合其他的宣发模式引导用户来参加这个活动
p0
  

针对在Active状态的Claim活动，允许将活动的链接以QR Code或者NFC设备的情况进行展示

链接可以展示为QR Code

NFC设备可以输入活动链接，并且让设备感知到

https://imtoken.atlassian.net/browse/R2D2-12183
 

6	
作为一个imToken Admin
我希望有一个后台可以支持我对Claim Token的活动进行操作和管理
这样运营成本会更低，我可以更高效的创建和管理活动
p0
  

在Home of Token的Claim活动管理后台提供以下功能，具体逻辑参照之前相对于的User Story

活动管理

创建活动

活动状态更新

活动链接查询和下载

https://imtoken.atlassian.net/browse/R2D2-12251
 

7	
作为一个imToken Admin

我希望Home of Token的后台可以展示Claim活动的大致数据及情况

这样我可以了解当前有哪些活动以及各自的情况是什么

p1
  

Home of Token后台提供一个专门展示Claim活动的页面

页面上展示Claim活动的信息列表，内容包括：

Claim活动ID （系统生成Unique ID）

Claim活动名称

Claim活动使用的Token

Claim活动使用的Token所在的链

Claim活动使用Token数量

每人领取数量

总预算数量

已领取数量

Claim活动

总领取人数

已领取人数

Claim活动的时间区间

开始日期，开始时间，精确到分钟

结束日期，结束时间，精确到分钟

Claim活动的当前状态

Claim活动的最后编辑人员

 

Claim Tokens
在imToken Admin完成了Claim活动的设置和启动之后，用户可以开始正式参与这个活动，并且领取到活动中设置的Token奖励。

Claim Token用户及系统流程
https://whimsical.com/home-of-token-DfZVW71xxFphowpPGcbeH5@or4CdLRbgixzQ77R36VDn6DV2YiKJi2gVdA4ibB55
 

User Story

优先级

具体步骤及逻辑

Jira Ticket

1	
作为一个想要参加活动的用户
我希望可以跟随Home of Token展示Claim Token流程，通过创建新的AA钱包来拿到奖励
这样我可以在最短时间内拿到奖励并且有兴趣进一步探索Token和钱包的其他适用场景
p0
  

Claim活动的展示可以通过链接或者QR Code

在DevCon宣发场景下会有以下两种情况：

活动链接会被嵌入在NFC设备中，用户使用收集靠近设备则可以读取到链接并且在手机浏览器中访问Home of Token中指定Claim活动的链接

用户使用手机的camera app扫描活动展示的QR Code，网页打开之后可以访问Home of Token中指定Claim活动的链接

从功能验收的角度，可以先以链接点击的形式启动流程

用户通过上述方式进入Home of Token页面之后， 展示Claim活动的Landing Page

Claim活动的Landing Page上会展示所有当前用户可以参加的Claim活动

后端根据以下逻辑进行判断，下列判断都满足时，活动为可以参加状态

当前活动状态 = Active

当前活动处于活动有效时间内

当前活动的预算仍然足够

可用Token数量足够 > 1人份发放Token数量

可参与人数 > 0

读取当前设备ID

一个设备针对一个活动只能参与一次

其他风控策略？

可以参加的活动展示时会有3种状态，需要区分样式

已领取状态

当前钱包地址已经领取过当前活动的奖品，且奖品已经发放成功

前端交互

展示已参加状态

用户不可以点击Claim按钮再次参加

展示奖品已发放的文案提示，同时提供链上奖品发放的交易Hash，点击之后进入explorer查看

奖品发放中

当前钱包地址已经正式申领过当前活动的奖品，奖品在发放中

前端交互

展示奖品发放中状态

用户不可以点击Claim按钮再次参加

展示文案提示用户需要链上交易处理来收到奖品，通常会是几分钟

课程参加状态

当前钱包地址还未参加这个活动，可以参加

前端交互

正常展示活动的详情，引导用户点击Claim开始领取奖品

如果页面的链接中有传入Claim活动ID参数

如果活动可以参加

则页面聚焦到指定的Claim活动上

如果指定的Claim活动不可参加

页面聚焦到其他可参加活动上

展示错误文案：选中的活动不可参加，请浏览其他活动

如果链接没有Claim活动ID参数，则随机聚焦到任何可参加的活动上

用户可以通过点击其他Claim活动来切换页面的聚焦点，用户选择参加一个具体的Claim活动之后展示活动信息：

点击则可领取X数量的Y Token

用户使用Passkey来验证和领取

用户点击参与活动之后检查当前页面的AA钱包状态。当前User Story只处理创建新AA的情况，其他情况参考后续User Story

唤起Passkey的验证页面

用户完成Passkey验证

Passkey中没有imToken AA Passkey，引导用户去进行注册

用户确认之后进行验证

系统生成并存储新的Passkey到用户的Passkey账户中

Passkey的命名规则为”imToken Passkey” + Datetime？

完成AA钱包创建

AA钱包创建默认支持的链为？

AA钱包创建时，默认每一个支持的链上只有一个账户

AA组件返回用户钱包地址信息

Home of Token Web App提交Claim Token请求，传入AA钱包地址

Home of Token Backend确认活动有效性，参考之前描述的规则

如果活动有效，则将指定的Token数量转入用户的AA钱包地址中

保证系统钱包有预留的Native Token来支付矿工费

如果活动时效，则展示错误文案，引导用户去参加其他活动

https://imtoken.atlassian.net/browse/R2D2-12157
 

2	
作为一个想要参加活动的用户
我希望可以跟随Home of Token展示Claim Token流程，通过已经登录已有AA来拿到奖励
这样我可以在最短时间内拿到奖励并且有兴趣进一步探索Token和钱包的其他适用场景
p0
  

用户点击参与活动之后检查当前页面的AA钱包状态

如果AA已经登录，则读取用户钱包地址

如果AA没有登陆

唤起Passkey的验证页面

用户完成Passkey验证

如果Passkey中没有imToken AA Passkey，参考注册流程

如果Passkey中有imToken AA Passkey，引导用户去登录（用户也可以要求重新注册钱包）

展示所有可用的Passkey

用户选择其中一个进行登录

要求用户完成Passkey验证

完成AA账户登录

读取用户钱包地址

AA组件返回用户钱包地址信息。Home of Token Web App推进后续发放Token的流程

https://imtoken.atlassian.net/browse/R2D2-12184
 

Explore Tokens - 后端
Explore Tokens的范围在文档最初进行过定义，这里主要分两块进行拆分：

后端数据的处理逻辑

前端数据的展示逻辑

User Story

优先级

具体步骤及逻辑

Jira Ticket

1	
作为一个imToken Admin
我希望可以在Home of Token系统中对Token创建Collections
这样系统可以根据这些Collections将最有价值的信息展示给到用户
p0
  

简化方案 - 通过配置文件来管理：

支持通过配置文件来配置Collection

每一个Collection的具体参数为：

Collection的名字

不需要Unique

Collection描述

用作内部记录Collection的大致情况和思路，不在前端展示

Collection Summary

一句话解释Collection的定义，用于在前端展示给到用户

Collection的代币选择逻辑

在具体的Collection中通过代码配置等方式实现

Collection中包含的Token会在咨询的时候进行计算（也可以考虑通过每日定时任务来计算逻辑）

Collection中Token类别的最大数量 

限制一个Collection中可以包含的Token类别数量

第一期支持以下的Collection

Top 10 个Marketcap最高的Token

Top 10 个24hr Trading Volume最高的Token

Top 10 个24hr 价格变化%

…?

长期方案 - 通过后台来管理：

在之前已经提到的Home of Token后台基础上，专门为Token Colleciton创建一个板块。已经登录的Admin可以访问这个板块中的内容

Admin点击创建新的Collection，Collection的参数和短期方案的配置项一致，除此之外还需要增加：

Collection的代币选择逻辑：

数据层面：

整体数据：

代币价格 (USD)

代币MarketCap （USD）

时效性数据：

代币24hr Volume（USD）

代币24hr 价格变化 (%)

逻辑层面：

X数据 >/</= Y

如 代币价格 > 1 USD

X数据的Top Y%

如 代币24hr Volume 的Top 1%

Admin输入上述信息之后提交Collection，Collection被创建成功

https://imtoken.atlassian.net/browse/R2D2-12158
 

2	
作为一个imToken Admin

我希望可以在Home of Token的后台查看Collections的状态

这样可以了解当前的配置以及决定是否要进行调整

p1
  

在之前已经提到的Home of Token后台基础上，专门为Token Colleciton创建一个板块

板块中首先展示已经创建的Collections，具体展示信息为：

Collection的名字

Collection的系统ID

Collection的创建人

Collection的最后一次修改时间

Collection可以进行的操作：

查看Collection

点击之后进入详情页查看Collection在创建之后输入的所有信息，加上上述的系统记录信息

编辑Collection

点击之后进入详情页，创建过程中的内容都可以进行编辑和提交

删除Collection

点击之后进行弹窗确认是否需要删除，Admin确认之后Collection被删除

 

Explore Tokens
以下为前端用户使用过程中涉及到的User Story

User Story

优先级

具体步骤及逻辑

Jira Ticket

1	
作为一个用户
我希望在进入Home of Token的页面之后可以查看到有价值的Token信息
这样可以帮助我了解Token的情况并产生交易动机
p0
 

用户进入Home of Token页面之后，页面渲染不同的Collections展示给到用户

Collections的展示逻辑为：

首先判断当前页面展示的Collection总数

Desktop为X？

Mobile为Y？

前端查询展示的Collection数据

传入X/Y参数

如果当前用户有登录AA钱包，则传入AA钱包地址信息

后端决定返回的Collection列表

从所有Collection中随机选择X/Y个Collection来返回

优先级不做区分，随机返回

Collection中的代币不会根据用户钱包支持的链进行筛选，完全按照Collection自己定义逻辑筛选出来的代币来进行返回

Home of Token收取到Collection列表之后进行展示

返回的Collection列表在前端按照相同优先级进行排序

Collections有3中展示状态：

大部分Collections在背景中

背景中的Collection需要以模糊的外形展示以下信息

Collection名称

Colleciton Summary信息

Collection中的Token Logo

一个Collection在中间聚焦

聚焦的Collection需要展示

Collection名称

Colleciton Summary信息

Collection中的Token Logo

只展示前9个Token

展示Collection中Token相关联的气泡标识

用户点击其中一个Token的logo则进入对应Token的Token Detail页面

用户点击聚焦的Collection可以放到到全屏展示

全屏展示的Collection需要包括以下信息

Collection名称

Colleciton Summary信息

Collection中的Token Logo

用户点击其中一个Token的logo则进入对应Token的Token Detail页面

https://imtoken.atlassian.net/browse/R2D2-12159
 

2	
作为一个用户
我希望在登录AA的状态下，进入Home of Token的页面之后可以查看到有价值的Token信息
这样可以帮助我了解Token的情况并产生交易动机
p0
  

后端返回Collection时

如果用户有登录钱包，则前端需要传入钱包地址，后端根据下列逻辑进行Collections返回

判断当前用户钱包中是否有创建过自定义Collection，判断当前钱包中是否有Token

如果有自定义Collection

返回参数中需要包含随机选择的一个自定义Collection

如果钱包中有Token

返回参数中包含一个My Token Collection

My Token Collection 默认包含前10个个人持有的资产价值最大的Token

剩余的Collections从Admin定义的Collections中随机选择

返回的Collections优先级为

[My Holdings]

[自定义Collection]

[其他系统定义Collection]

https://imtoken.atlassian.net/browse/R2D2-12185
 

3	
作为一个用户

我希望在Home of Token的页面上可以自定义Collection

这样我可以根据自己的喜好以及关注点来归集和查看Token信息

p1
  

用户在Home of Token页面上选择创建自定义Collection

进入自定义Collection创建流程，主要参数和系统创建Collection参数一致

交互参考后台方案

用户确认之后提交Collection，展示成功结果

 

4	
作为一个用户

我希望在Home of Token的页面可以根据一些不同的视窗View刷新展示的Collections

这样我可以更好的聚焦到当下想要看的信息

p1
  

用户可以在Home of Token页面上切换不同的View来展示不同的Collection

Default View

参考最基本的Collection展示逻辑

自定义Collection View

展示所有用户自己创建的Collections，如果没有则为空

包含创建Collection的入口

未来会添加其他View

 

5	
作为一个用户
我希望可以在Home of Token网站的任意一个页面都可以进入AA钱包注册流程
这样我可以创建AA钱包再继续使用Home of Token Web App的其他功能
p0
 

如果用户在Home of Token Web App中没有登录AA钱包

则展示注册和登录入口

用户选择AA注册流程

注册AA流程和Claim Token流程中的AA板块一致，引导用户使用PassKey完成AA钱包的创建

注册成功之后展示成功结果，Home of Token中的钱包进入登录状态

https://imtoken.atlassian.net/browse/R2D2-12160
 

6	
作为一个用户
我希望可以在Home of Token网站的任意一个页面都可以登录/登出我的AA钱包
这样网站可以根据我的状态来更新相关内容，会更有帮助
p0
  

用户处在Home of Token Web App的任意一个页面时都可以登录/登出AA钱包

登录流程（参考Claim Token中的登录流程）

用户点击登录入口之后，展示Passkey说明页面，然后引导用户完成登录

登录完成之后

钱包入口展示用户的钱包地址缩写

用户点击钱包地址缩写后

展示完整钱包地址

展示钱包支持的多链名称

展示钱包的Portfolio入口

展示登出功能入口

用户点击登出功能

跳出弹窗确认用户想要登出，用户确认之后登出钱包

https://imtoken.atlassian.net/browse/R2D2-12161
 

7	
作为一个用户
我希望在Web App中登录了钱包之后可以查看自己资产在所有链上的分布
这样我可以更好的了解个人资产情况并且决策要如何管理自己的资产
 

(Portfolio POC参考 https://poc-portfolio-nine.vercel.app/?walletAddr=0xffB3118124cdaEbD9095fA9a479895042018cac2）

p0
  

用户点击登录的钱包之后会打开一个子菜单，其中包含一个查看钱包Portfolio的入口。用户点击之后进入钱包Portfolio页面：(参考页面)

Portfolio上方展示

整体资产的法币金额

对应的钱包地址

钱包地址支持的链

具体代币的持仓排序按照代币法币金额进行倒叙

第一级分类为

链

展示链的名称/Logo

展示当前链下所有代币持仓的法币金额汇总，占整体持仓的%

第二季分类为

链下的代币

代币的名称/Logo/Symbol

代币的价格

代币的持有数量

代币的持仓法币金额

代币占整体持仓的%

https://imtoken.atlassian.net/browse/R2D2-12348
 

Token Details & Actions
用户在Home of Token页面点击任何一个单独的Token后，就会进入Token Details页面。这个页面会包括Token Details来显示Token的详情，同时也会有Token Actions来告知用户这个Token可以做什么，引导用户完成操作。

Token Details
Token Details板块的具体展示信息如下：

User Story

优先级

具体步骤及逻辑

Jira Ticket

1	
作为一个用户
我希望在进入Token Details页面之后可以查看到这个Token相关的所有咨询
这样我可以了解到Token的详情，帮助我判断我后续想要针对这个Token进行什么操作
p0
 

用户点击Explore页面上的一个Token进入选中Token的Token Details页面：Token

[只在PC上实现]如果用户有登录AA

页面顶部展示所有当前持有的Token，用户可以点击不同的Token来进行切换

针对当前选中的代币。页面分为头部区域和下方滑动区域。

需要展示头部信息为：

代币名称及介绍：

代币名称

代币Logo

代币Symbol

代币的当前价格 （USD）

代币所在链及合约地址

如在多链上则通过子菜单展示多链地址

如果用户有登陆状态且持有代笔，展示代币持仓信息

整体持仓数量

整体持仓金额

有快捷键可以引导用户进入Portfolio页面查看当前代币在多链上的分布

点击之后进入Portfolio页面，自动添加一个当前代币的筛选条件，只展示选中的代币在当前钱包中多链的部署情况。用户可以手动去除这个代币筛选条件

其他信息按照Portfolio的默认格式来展示

用户点击返回，可以回到Token Details页面

用户通过滑动可以进入到其他代币信息展示页面。每一个信息模块如下，不可点击，只能查看信息：

[现有]  代币价格信息：

代币的24hr/7d 价格变化 （%）

[现有] 代币交易量信息：

代币的24hr/7d 交易量变化 （%）

代币Yield信息：

代币的当前可以收到的Yield，以及last week的Yield

社区对代币的情绪

具体逻辑TBD？

[现有] 代币说明

代币的简单介绍

包括代币网站链接

代币publish date

[需要新建] 用户可能会感兴趣的其他代币

展示其他代币的logo

用户点击代币logo之后会跳转进入对应代币的详情页面

https://imtoken.atlassian.net/browse/R2D2-12162
 

2	
作为一个用户

我希望Token Details页面上的展示的信息都可以有更详细的展示

这样我可以了解更详细的信息，帮助我作出如何操作Token的决策

P1
  

[只在PC上实现] 在此梳理Token Details中信息板块每一个区域点击之后的交互。

代币价格信息

用户点击之后展开价格跟随时间变化的图表

和App中Market下代币的价格时间表保持一致

代币交易量信息：

用户点击之后展开交易量跟随时间变化的图表

参考App中Market下代币的价格时间表格式，数值替换成交易量

代币Yield信息：

用户点击之后展开Yield跟随时间变化的图表

参考App中Market下代币的价格时间表格式，数值替换成Yield%数值

社区对代币的情绪

具体逻辑TBD？

代币说明

代币的简单介绍

用户点击之后任意位置之后展开详细说明

和App中token-profile中的内容保持一致

App中的Token详情作为参考
 

App中的市场行情作为参考
 

 

Token Actions
Token Actions区域需要列举所有用户针对当前Token可以执行的操作，下面主要分为4种类型。

基础交互
User Story

优先级

具体步骤及逻辑

Jira Ticket

1	
作为一个用户
我希望在Token Details页面可以针对一个Token发起Send操作
这样我可以在当前页面快速完成Send Token操作
p0
 

Token Actions板块展示Send功能，页面核心元素和imToken Wallet保持一致

如果用户没有登录AA

用户点击任意的Token Actions，会展示弹窗，引导用户先注册AA

如果用户由AA，并且有当前Token，通过AA Send实现转账

页面展示以下信息：

选中的代币名称

选中的代币在多链上的总持仓量

用户选择用哪条链上的代币来进行转账

默认选中持仓最高的链

用户可以使用下拉菜单进行选择，下拉菜单中展示不同链上的分布

用户输入收款地址

输入转账代币数量

展示矿工费预估

P0 - Send交易默认使用ETH进行支付

可以考虑在活动期间由imToken Paymaster支付所有ETH矿工费，这样逻辑比较简单，也可以适配更多Claim Token的活动 。如果有活动的话，可以补充视觉元素来告知用户有关活动的信息

P1 - 允许用户使用其他代币来支付Gas Fee。用户点击Gas Fee模块之后展示可以支持的代币

imToken自建的Paymaster支持的支付代币 TBD？

目标支持至少一种Stablecoin来支付，如USDC/USDT

用户可以看到使用其他Token来支付矿工费的报价是多少

用户选择了Token之后回到Send页面，矿工费更新为所选的Token以及报价

用户确认了上述信息之后提交交易

触发AA签名

https://imtoken.atlassian.net/browse/R2D2-12163
 

2	
作为一个用户
我希望在Token Details页面可以针对一个Token发起Receive操作
这样我可以在当前页面快速完成Receive Token操作
p0
 

Token Actions板块展示Receive功能，页面具体内容为：

展示当前钱包收款资产类型

展示当前钱包支持的链信息，表明用户可以将一下链上的资产转入钱包。如果是其他链上的资产，不可以进行操作

展示当前钱包的收款地址

QR Code

钱包地址

支持分享和复制钱包地址信息，参考imToken App中的功能

3	
作为一个用户
我希望在Token Details上查看交易历史记录
这样我可以在当前页面快速完成Receive Token操作
p0
  

Token Actions板块展示Activity功能更，页面具体内容为：

按照日期倒叙展示用户在每日下的交易情况

每一个交易展示：

交易类型：

Send/Receive/Swap/Others

交易日期

交易时间

交易Token的Symbol和数量

链接引导用户点击之后查看explorer中的交易详情

每一次加载展示10个交易，向下拖拽可以刷新多10条直至没有更多交易历史记录

https://imtoken.atlassian.net/browse/R2D2-12347
 

Tokenlon Swap交互
User Story

优先级

具体步骤及逻辑

1	
作为一个用户
我希望在Token Details页面可以针对一个Token发起Swap操作
这样我可以在当前页面快速完成Token Swap
p0
 

Token Actions板块展示Swap功能

Swap功能唤起Tokenlon Web的组件，支持在Token Details页面直接进行兑换。Tokenlon Web中的功能保持不变

Swap交易提交之后引导用户完成AA签名并提交交易

RIVO Pay交互
https://imtoken.atlassian.net/wiki/x/gYD4Xw
 

其他Dapp交互
User Story

优先级

具体步骤及逻辑

1	
作为一个用户
我希望在了解当前Token可以和其他什么Dapp进行交互并且进入交互流程
这样我可以更全面的了解Token的可能性并且去使用它
p0
 

？

Appendix
Appendix A - 前期问题准备
参考project charter https://imtoken.atlassian.net/wiki/spaces/CONSENLABS/pages/1589248001
 

Home of Token的产品需求依赖对这些问题的回答，这样可以更好的确定方向和范围

用户相关：

我们的目标用户画像是什么？他们的特征是什么？

Crypto使用经验

Crypto资产情况

使用Crypto的动机，想要得到什么？

这些用户面临的以及我们想要解决的具体问题是什么？

Claim Token：

Explore Token：

Do things with Token:

产品设计相关：

产品的最终目标是什么？产品角度以及商业角度？有什么衡量标准？

Increase in brand awareness and NPS

其他目标不需要考虑

用户注册数

活跃用户数

交易数量和频率

资产价值

用户留存

现在有竞品在解决这个问题吗？他们的优劣是什么？

和其他信息类网站的区别

和其他AA的区别

我们为什么要解决这个些问题，我们有什么优势可以更好的解决这些问题？如何和竞品区分？

Claim Token：

Explore Token：

没有确认的目标，用户了解Token然后再去发现其他的Token

Do things with Token:

我们希望用户完成的理想流程是什么？流程的终点是什么？完成这些步骤之后对用户和我们来说有什么好处？

Appendix B - RIVO方案讨论

由于RIVO系统比较复杂，目前没有上线。且系统本身和线上的imToken Card有重合。所以完成上述的生产环境场景挑战很大。如果是为了DevCon去支持一个模拟的支付流程，可以考虑结合一些人工和测试环境的内容来快速支持。大致方案如下：

如果采取上述的模拟链路，则改造大致为：

Web POS支持Crypto收单，指定商户钱包地址和收款Token

Web POS支持手动更新订单状态为成功

目的  
在 ETHTaipei 展會上，展示 imToken 積極參與 ETH 生態路線圖，並以技術創新 (showcase) 展示價值

EOA → AA (合約帳戶為用戶帶來更好體驗)

keyless

gasless

frictionless

L2-interop 

Across

chain-specific address (以 ENS 域名先作為參考, 非成熟方案)

Opensource AA contract 

 

技術展示
Send X to Y on Z

結合既有公司內取得的階段性成果功能

Claimable Link

Paymaster

Across

 

協作
Labs x Eng x MKT x Design 

 

聲明與條款
Webapp 上會提示用戶此乃實驗階段產品，有一定風險

⛳ Project Goal
busts in silhouette Project Resource  
clamp  Project Communication
world map Project Timeline 
police car light Project Risk or Question 
check mark button Project Follow-ups
bookmark References
 

⛳ Project Goal
時間: Apr 1, 2025 - Apr 2, 2025 

 

在 
ETHTaipei 2025 展會上，表現 imToken 積極參與 ETH 生態，以技術創新 (showcase) 展示產品價值

符合 EOA 到智能合約帳戶路線圖

合約帳戶為用戶帶來更好體驗 (keyless, gasless, frictionless)

展示 L2-interop 秒級別到帳的跨鏈體驗

Across

chain-specific address (以 ENS 域名先作為參考, 非成熟方案)

開源 AA 合約錢包代碼, 展現自主研發能力

 

busts in silhouette Project Resource  
Lead: @changwu 

Project facilitator: @FengYi Yu 

Team

Owner

Name

Requirements

Claimable link 

@Cyan Ho 

FE: @Whitney 

BE: @David Cai (Unlicensed) @Cyan Ho 

Design: @James Hou 

Contract: @陳敬翔 

SDK: @Chi-Hao(Alfred), Lu 

SRE: @David Cai (Unlicensed) 

Security: @Shawn Li 

CL 設計稿

CL user story 技術實現

CL 合約內部審計

現場活動流程, 與 NFC tag 和 QR code 的發放

Cross-rollup transfer 

@Cyan Ho 

dev: @Chi-Hao(Alfred), Lu @Cyan Ho 

Design: @James Hou 

FE: @sha (Unlicensed) 

bridge 設計稿

接入 Across

Paymaster <> GA

@jiahui.cui 

FE: @Whitney 

BE: @jiahui.cui 

SDK: @Chi-Hao(Alfred), Lu 

SRE: @David Cai (Unlicensed) 

Design: @James Hou 

Runway 改造

上下游接入

UI 設計稿

AA contract

@Nic (Unlicensed) 

dev: @Nic (Unlicensed) 

Reviewer: @jiahui.cui @Shawn Li 

完成審計報告

修復合約

 

 

 

 

 

clamp  Project Communication
前期以每周周会形式对齐每周进展，同时建立 Slack 项目频道用于日常沟通。如遇到阻碍项目进度的新风险，请项目组员在 Slack 公频里上报@项目经理进行风险登记与管理。

Meeting name

Time

Member

 

Daily standup meeting

10am

 

 

Weekly Meeting

10am Monday

 

 

 

world map Project Timeline 
03-Mar
2025
10-Mar
17-Mar
24-Mar
31-Mar
07-Apr
* 設計稿確定
** Runway DDL
初版 demo
Claimable LinkX-rollup transferPaymaster <> GAAA Contract
Web mobile

Discovery

Web mobile FE

Web PC FE

Web mobile BE

Mobile testing

integration

設計稿

前端集成

後端開發 / Relayer

合約審計

NFC tag 配置

測試與優化

AA Passkey

Tech spec

integration

設計稿

前端集成

數據支持

測試優化

webPOS

Tech spec

integration

設計

開發

集成

合約修復

合約開源 & 審計報告

 

 

police car light Project Risk or Question 
Risk Description

风险描述

Risk Reason

风险原因

Risk Priority Number 

P*I 风险优先级

Principal

负责人

Action items

应对措施

環境

Staging or Production? 

 

 

對標 Devcon，以 production 環境作為展示。

GA 的介面端開發時長緊張

若要改從 Runway 來互動，SDK 會需要整個重構，GA 也會使得前端操作 SDK 的方式大改，至少與 Paymaster 互動的要全部重寫

由於這是一個全新的功能和 workflow，且包含目前還不成熟的後端服務，不像 Alchemy Bundler 或過往的 imToken paymaster 已經有很久的時間開發、維護、同步，也不是市面上 AA 錢包既定的流程和介面，所以測試以及前端接上的時間也會比 Devcon 那時久

如果 Runway 那邊交付給 SDK 的時候完全沒問題，最快需要三個完整天（含測試）；若中間 runway 不穩定或者出現坑，需要來回處理可能就會需要四、五天

前端接續 SDK 完成串接整個服務，可能需要五天的時間

HIGH

 

这次 GA 的需求是比较紧急，而且涉及上下游多方。因此，在任务敲定后，我思考了一下分阶段推进 GA 的方式

阶段 1：因为 runway 目前主要扮演的是转发的工作，而 paymaster 可以跟 runway 对齐接口。从而，sdk 和前端实际上可以先对接 paymaster 实现 GA 的流程

阶段 2：runway 开发完毕，sdk 和前端接上 runway，由于 runway 扮演转发的工作，而且接口跟 paymaster 基本一致， 所以在阶段 1 的基础上接入 runway 会相对比较简单

注：考虑到阶段 2 不顺利的情况，阶段 1 的完成实际上已经可以让用户使用上 GA 的工作流了，也可以上 prod 了。

GA 的服務穩定性

這個互動模式會使得未來不兼容其他 paymaster（無法抽象 payment），需要分路進行

因為 GA + Runway 的 logic 整個和別的 paymaster 不一樣，有很多非同步和非統一介面，未來如果還有考慮串別的 paymaster，這可能會成為技術債，也不存在緊急轉用別的 paymaster 來應急的可能

HIGH

 

GA 其实主要是统一 imToken 产品集成 gas 抽象的方式(比如 4337 以及 bsc 的 megafuel)。因此，设计上会加入 imToken 自身的思考，所以会跟社区标准会有差异。接入别的 paymaster 也是可行的，不过不像原来这么简单，需要在 runway 集成接入。

Across Relayer 遲緩

雖然現在在測試網上完整操作（發起 bridge 到收款）時長約三分鐘、主網時長約秒級，目前試驗起來也相當穩定，但仍然存在活動當時 relayer 服務遲緩甚至不能用的可能

LOW
 / 
Medium

 

等待時間如果低於一分鐘：正常情況

低於三分鐘：視服務為正常但提醒之後的活動用戶大概需要這個時間

超過三分鐘：需要討論解決方案

合約出現漏洞

合約上線並開源後，白帽通知合約有漏洞

合約上線被駭客攻擊（考量到為測試版本，沒有經濟誘因，因此發生機率低）

HIGH

 

和白帽、審計團隊討論修復方案並部署

掌握用戶合約地址

針對受影響用戶，在對方登入時請求用戶更換或升級合約

CL 的 Link 洩露

CL Link 洩露、NFC 遺失或無法使用，導致被提前領走，現場用戶沒辦法使用

HIGH

 

有一個後台可以臨時產生 Link 並現場發放（透過例如 airdrop、telegram 傳送）

CL Relayer 交易無法上鏈

網路手續費飆高，導致 Relayer 無法幫用戶上鏈領取

HIGH

 

為 Relayer 交易手續費加足夠 Buffer，以及定時重送交易的功能

 

 

 

 

 

check mark button Project Follow-ups
Task

Owner

Status

Action items

 

 

 

 

 

 

 

 

bookmark References
R2D2-13755: [ETH Taipei 2025] 
Resolved
 

 
Latest PRD / Spec please refer to 
Send (cross chain)
 and its sub-page
目的
提供用戶將 X token on Y receiver 轉到 Z network, 該案例基於 CSA (Chain-Specific Address), 故為了讓用戶有感於輸入的地址同時夾帶網路選擇的信息, 因此應用上會結合 Cross-Chain Send 與 CSA 的使用

ERC- 3770

op.alice.eth

alice.eth@op

0x9522…afe5@arb

address@network

→ ID@network

 

Mar 5, 2025 初步讨论，调整如下表

UX ticket R2D2-13827: [CRT] Cross chain sending UX
Resolved
 

Figma https://www.figma.com/design/pEjrXrybZtl6swJQyWGV9y/ETH-Taipei?node-id=132-16024&t=xJfuktCO91O4PiJl-1Connect your Figma account 

 

Design scope
本次支持場景如下

Send / Cross-chain Send

Send Any Token from Arbitrum to Arbitrum 

Cross-chain send USDC from Arbitrum to Optimism 

在 CSA 與 legacy 兼容的部分, 主要爲以下幾個狀態

Best-case scenario:

op.imtoken.eth (CSA)

imtoken.eth (best matching or prompt selecting)

Worst-case scenario:

Supports ERC3770，eg. op:0x388C818CA8B9251b393131C08a736A67ccB19297 (CSA)

Raw address, eg. 0x388C818CA8B9251b393131C08a736A67ccB19297 + prompt selecting

 

User story
功能

User Story

优先级

Long-term Product 具体步骤及逻辑

理想版本的產品應該支援多網絡，但目前版本只支援單網絡，所以我們用 send to another network 來演示可以跨鏈的能力

ETH Taipei

Jira Ticket

1	
sender

Send

作为一个 已有帳號及資產的用戶

我希望將 X 代幣從 Y 網路，跨鏈轉到 Z 網路上，並且在 20 秒內完成

n/a 

已支持

在有資產的頁面，用戶可以點擊 send 進到表單

 

 

2	
p0
 

在 send 表單上

用戶可以選擇 token 

用戶可以輸入轉出的 token amount

用戶默認從當前網絡 (Arb) 傳送到相同網絡 (Arb)

用戶可選擇從當前網絡 (Arb) 跨鏈到其他網絡 (呈現可接收的網絡)

用戶僅能從 ARB 網絡將代幣 USDC 跨鏈到 OP 網絡

op.alice.eth (CSA)

alice.eth (ENS + selected network)

可參考
[SPEC] Best matching of ENS records
 

 

ETH Taipei 现场只跨到OP的场景，基于展示未来可拓展性，可以用“more to come”之类的文字作为示意，但技术上可支持EVM相容的网络

 

3	
 

用戶 A 能夠輸入 Z 網路上的地址，完成轉帳

p0
 

用戶可以指定地址 

用戶可以手動輸入 ENS 地址, 例如 optimism.token.eth

用戶能從 ARB 網絡將任何代幣轉帳到ARB 網絡

op.alice.eth (CSA)

alice.eth (ENS + selected network)

可參考
[SPEC] Best matching of ENS records
 

 

 

4	
 

Scan QR code to send

p0

用户可以扫码辨识接收方地址

如果QR code 有自带网络讯息并可侦测到，则自动选择到对应的网络

如果QR code没有自带网络讯息，则默认选择同网络

不管QR code 是否有自带网络讯息，用户都可以手动选择到想转账的目的地网络并且调整

用戶可通過 QR code 掃碼讀取地址

 

5	
後端解析？

 

 

Lack / txn detail 應該已經可以解析token 流動的過程了吧？

待定

先搭建快速版本，看看解析情况

 

6	
sender

token activity

 

 

呈現對應 token 及 network 的轉移

 

 

7	
sender

txn detail

 

 

呈現對應 token 及 network 的轉移

 

 

POC
LABS-2714: [ETHTaipei][WebApp] 接入 cross-rollup L2 transfer
Closed
  (Across)

 

Comments
輸入 alice.eth@op 或是某種編碼

可以解析, 所以自動彈出視覺提示, 讓用戶知道 wallet 已經識別切換到 op

輸入 bob.eth@op 或是 0xddd..@op

network 不能解析, 所以呈現下拉選單, 選擇網路

 

Mar 18, 2025 

相關定案與設計請參考

Send (cross chain)
 

[SPEC] Best matching of ENS records
 

 
 

 