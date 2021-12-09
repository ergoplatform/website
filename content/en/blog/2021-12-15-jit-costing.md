---
title: "Towards Ergo v5.0: JIT costing"
date: 2021-12-15T16:02:39.774Z
author: Ergo Foundation
authorPhoto: /img/uploads/1762.png
blogPhoto: 
tags:
---
<!--StartFragment-->

## Background And Motivation

In Ergo blockchain all crypto assets are stored in boxes protected by guarding conditions
(aka contracts). Every unspent box is protected by a script, which is stored in
the box itself as serialized [ErgoTree](https://ergoplatform.org/docs/ErgoTree.pdf). The
script should be evaluated as part of transaction validation to verify box's spending
conditions.

Script verification takes some time and system resources on every network node and thus
both the execution time and the resources need to be put under control. This is known as
cost estimation (or "costing").

Costing is necessary to prevent long delays in verification of new blocks by network
nodes. Both over-sized and over-expensive scripts may be exploited to attack the network
by exhausting resources of verifiers and slowing down network transaction throughput.

There are two general approaches to do cost control:
1) Ahead-Of-Time Costing (AOTC) - estimation of costs before script execution, so that
over-expensive script is not executed at all.
2) Just-In-Time Costing (JITC) - accumulation of costs _during_ (i.e. in the process of)
   the actual execution of a script.

Ergo v5.0 will take advantage of both approaches so that verification of Ergo contracts is
done with a hybrid JIT+AOT cost control.
