"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3498],{15204:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseTransaction=void 0;var c=o(r(46446)),h=r(47144),u=r(88871),d=function(){function e(e){this.cache={hash:void 0,dataFee:void 0},this.activeCapabilities=[],this.DEFAULT_CHAIN=c.Chain.Mainnet,this.DEFAULT_HARDFORK=c.Hardfork.Istanbul;var t=e.nonce,r=e.gasLimit,i=e.to,n=e.value,o=e.data,a=e.v,s=e.r,u=e.s,d=e.type;this._type=new h.BN((0,h.toBuffer)(d)).toNumber();var f=(0,h.toBuffer)(""===i?"0x":i),l=(0,h.toBuffer)(""===a?"0x":a),v=(0,h.toBuffer)(""===s?"0x":s),p=(0,h.toBuffer)(""===u?"0x":u);this.nonce=new h.BN((0,h.toBuffer)(""===t?"0x":t)),this.gasLimit=new h.BN((0,h.toBuffer)(""===r?"0x":r)),this.to=f.length>0?new h.Address(f):void 0,this.value=new h.BN((0,h.toBuffer)(""===n?"0x":n)),this.data=(0,h.toBuffer)(""===o?"0x":o),this.v=l.length>0?new h.BN(l):void 0,this.r=v.length>0?new h.BN(v):void 0,this.s=p.length>0?new h.BN(p):void 0,this._validateCannotExceedMaxInteger({value:this.value,r:this.r,s:this.s}),this._validateCannotExceedMaxInteger({gasLimit:this.gasLimit},64),this._validateCannotExceedMaxInteger({nonce:this.nonce},64,!0)}return Object.defineProperty(e.prototype,"transactionType",{get:function(){return this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),e.prototype.supports=function(e){return this.activeCapabilities.includes(e)},e.prototype.validate=function(e){void 0===e&&(e=!1);var t=[];return this.getBaseFee().gt(this.gasLimit)&&t.push("gasLimit is too low. given ".concat(this.gasLimit,", need at least ").concat(this.getBaseFee())),this.isSigned()&&!this.verifySignature()&&t.push("Invalid Signature"),e?t:0===t.length},e.prototype.getBaseFee=function(){var e=this.getDataFee().addn(this.common.param("gasPrices","tx"));return this.common.gteHardfork("homestead")&&this.toCreationAddress()&&e.iaddn(this.common.param("gasPrices","txCreation")),e},e.prototype.getDataFee=function(){for(var e=this.common.param("gasPrices","txDataZero"),t=this.common.param("gasPrices","txDataNonZero"),r=0,i=0;i<this.data.length;i++)0===this.data[i]?r+=e:r+=t;return new h.BN(r)},e.prototype.toCreationAddress=function(){return void 0===this.to||0===this.to.buf.length},e.prototype.isSigned=function(){var e=this,t=e.v,r=e.r,i=e.s;return 0===this.type?!!(t&&r&&i):!(void 0===t||!r||!i)},e.prototype.verifySignature=function(){try{var e=this.getSenderPublicKey();return 0!==(0,h.unpadBuffer)(e).length}catch(e){return!1}},e.prototype.getSenderAddress=function(){return new h.Address((0,h.publicToAddress)(this.getSenderPublicKey()))},e.prototype.sign=function(e){if(32!==e.length){var t=this._errorMsg("Private key must be 32 bytes in length.");throw new Error(t)}var r=!1;0===this.type&&this.common.gteHardfork("spuriousDragon")&&!this.supports(u.Capability.EIP155ReplayProtection)&&(this.activeCapabilities.push(u.Capability.EIP155ReplayProtection),r=!0);var i=this.getMessageToSign(!0),n=(0,h.ecsign)(i,e),o=n.v,a=n.r,s=n.s,c=this._processSignature(o,a,s);if(r){var d=this.activeCapabilities.indexOf(u.Capability.EIP155ReplayProtection);d>-1&&this.activeCapabilities.splice(d,1)}return c},e.prototype._getCommon=function(e,t){var r;if(t){var i=new h.BN((0,h.toBuffer)(t));if(e){if(!e.chainIdBN().eq(i)){var n=this._errorMsg("The chain ID does not match the chain ID of Common");throw new Error(n)}return e.copy()}return c.default.isSupportedChainId(i)?new c.default({chain:i,hardfork:this.DEFAULT_HARDFORK}):c.default.forCustomChain(this.DEFAULT_CHAIN,{name:"custom-chain",networkId:i,chainId:i},this.DEFAULT_HARDFORK)}return null!==(r=null==e?void 0:e.copy())&&void 0!==r?r:new c.default({chain:this.DEFAULT_CHAIN,hardfork:this.DEFAULT_HARDFORK})},e.prototype._validateCannotExceedMaxInteger=function(e,t,r){var i,n;void 0===t&&(t=256),void 0===r&&(r=!1);try{for(var o=a(Object.entries(e)),c=o.next();!c.done;c=o.next()){var u=s(c.value,2),d=u[0],f=u[1];switch(t){case 64:if(r){if(null==f?void 0:f.gte(h.MAX_UINT64)){var l=this._errorMsg("".concat(d," cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(f));throw new Error(l)}}else if(null==f?void 0:f.gt(h.MAX_UINT64))throw l=this._errorMsg("".concat(d," cannot exceed MAX_UINT64 (2^64-1), given ").concat(f)),new Error(l);break;case 256:if(r){if(null==f?void 0:f.gte(h.MAX_INTEGER))throw l=this._errorMsg("".concat(d," cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(f)),new Error(l)}else if(null==f?void 0:f.gt(h.MAX_INTEGER))throw l=this._errorMsg("".concat(d," cannot exceed MAX_INTEGER (2^256-1), given ").concat(f)),new Error(l);break;default:throw l=this._errorMsg("unimplemented bits value"),new Error(l)}}}catch(e){i={error:e}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}},e.prototype._getSharedErrorPostfix=function(){var e="";try{e=this.isSigned()?(0,h.bufferToHex)(this.hash()):"not available (unsigned)"}catch(t){e="error"}var t="";try{t=this.isSigned().toString()}catch(t){e="error"}var r="";try{r=this.common.hardfork()}catch(e){r="error"}return"tx type=".concat(this.type," hash=").concat(e," nonce=").concat(this.nonce," value=").concat(this.value," ")+"signed=".concat(t," hf=").concat(r)},e}();t.BaseTransaction=d},13160:function(e,t,r){var i,n=r(48834).Buffer,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},s=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(t,"__esModule",{value:!0});var c=r(47144),h=r(15204),u=r(88871),d=r(73165),f=n.from(2..toString(16).padStart(2,"0"),"hex"),l=function(e){function t(t,r){var i,n;void 0===r&&(r={});var o=e.call(this,a(a({},t),{type:2}))||this;o.DEFAULT_HARDFORK="london";var s=t.chainId,h=t.accessList,f=t.maxFeePerGas,l=t.maxPriorityFeePerGas;if(o.common=o._getCommon(r.common,s),o.chainId=o.common.chainIdBN(),!o.common.isActivatedEIP(1559))throw new Error("EIP-1559 not enabled on Common");o.activeCapabilities=o.activeCapabilities.concat([1559,2718,2930]);var v=d.AccessLists.getAccessListData(null!=h?h:[]);if(o.accessList=v.accessList,o.AccessListJSON=v.AccessListJSON,d.AccessLists.verifyAccessList(o.accessList),o.maxFeePerGas=new c.BN((0,c.toBuffer)(""===f?"0x":f)),o.maxPriorityFeePerGas=new c.BN((0,c.toBuffer)(""===l?"0x":l)),o._validateCannotExceedMaxInteger({maxFeePerGas:o.maxFeePerGas,maxPriorityFeePerGas:o.maxPriorityFeePerGas}),o.gasLimit.mul(o.maxFeePerGas).gt(c.MAX_INTEGER)){var p=o._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");throw new Error(p)}if(o.maxFeePerGas.lt(o.maxPriorityFeePerGas))throw p=o._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)"),new Error(p);if(o.v&&!o.v.eqn(0)&&!o.v.eqn(1))throw p=o._errorMsg("The y-parity of the transaction should either be 0 or 1"),new Error(p);if(o.common.gteHardfork("homestead")&&(null===(i=o.s)||void 0===i?void 0:i.gt(u.N_DIV_2)))throw p=o._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"),new Error(p);return(null===(n=null==r?void 0:r.freeze)||void 0===n||n)&&Object.freeze(o),o}return o(t,e),Object.defineProperty(t.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),t.fromTxData=function(e,r){return void 0===r&&(r={}),new t(e,r)},t.fromSerializedTx=function(e,r){if(void 0===r&&(r={}),!e.slice(0,1).equals(f))throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(2,", received: ").concat(e.slice(0,1).toString("hex")));var i=c.rlp.decode(e.slice(1));if(!Array.isArray(i))throw new Error("Invalid serialized tx input: must be array");return t.fromValuesArray(i,r)},t.fromRlpSerializedTx=function(e,r){return void 0===r&&(r={}),t.fromSerializedTx(e,r)},t.fromValuesArray=function(e,r){if(void 0===r&&(r={}),9!==e.length&&12!==e.length)throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");var i=s(e,12),n=i[0],o=i[1],a=i[2],h=i[3],u=i[4],d=i[5],f=i[6],l=i[7],v=i[8],p=i[9],g=i[10],m=i[11];return(0,c.validateNoLeadingZeroes)({nonce:o,maxPriorityFeePerGas:a,maxFeePerGas:h,gasLimit:u,value:f,v:p,r:g,s:m}),new t({chainId:new c.BN(n),nonce:o,maxPriorityFeePerGas:a,maxFeePerGas:h,gasLimit:u,to:d,value:f,data:l,accessList:null!=v?v:[],v:void 0!==p?new c.BN(p):void 0,r:g,s:m},r)},t.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var t=e.prototype.getDataFee.call(this);return t.iaddn(d.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:t,hardfork:this.common.hardfork()}),t},t.prototype.getUpfrontCost=function(e){void 0===e&&(e=new c.BN(0));var t=c.BN.min(this.maxPriorityFeePerGas,this.maxFeePerGas.sub(e)).add(e);return this.gasLimit.mul(t).add(this.value)},t.prototype.raw=function(){return[(0,c.bnToUnpaddedBuffer)(this.chainId),(0,c.bnToUnpaddedBuffer)(this.nonce),(0,c.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas),(0,c.bnToUnpaddedBuffer)(this.maxFeePerGas),(0,c.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:n.from([]),(0,c.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,c.bnToUnpaddedBuffer)(this.v):n.from([]),void 0!==this.r?(0,c.bnToUnpaddedBuffer)(this.r):n.from([]),void 0!==this.s?(0,c.bnToUnpaddedBuffer)(this.s):n.from([])]},t.prototype.serialize=function(){var e=this.raw();return n.concat([f,c.rlp.encode(e)])},t.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var t=this.raw().slice(0,9),r=n.concat([f,c.rlp.encode(t)]);return e?(0,c.keccak256)(r):r},t.prototype.hash=function(){if(!this.isSigned()){var e=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(e)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,c.keccak256)(this.serialize())),this.cache.hash):(0,c.keccak256)(this.serialize())},t.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},t.prototype.getSenderPublicKey=function(){var e;if(!this.isSigned()){var t=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(t)}var r=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(u.N_DIV_2)))throw t=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"),new Error(t);var i=this,n=i.v,o=i.r,a=i.s;try{return(0,c.ecrecover)(r,n.addn(27),(0,c.bnToUnpaddedBuffer)(o),(0,c.bnToUnpaddedBuffer)(a))}catch(e){throw t=this._errorMsg("Invalid Signature"),new Error(t)}},t.prototype._processSignature=function(e,r,i){var n={common:this.common};return t.fromTxData({chainId:this.chainId,nonce:this.nonce,maxPriorityFeePerGas:this.maxPriorityFeePerGas,maxFeePerGas:this.maxFeePerGas,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new c.BN(e-27),r:new c.BN(r),s:new c.BN(i)},n)},t.prototype.toJSON=function(){var e=d.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,c.bnToHex)(this.chainId),nonce:(0,c.bnToHex)(this.nonce),maxPriorityFeePerGas:(0,c.bnToHex)(this.maxPriorityFeePerGas),maxFeePerGas:(0,c.bnToHex)(this.maxFeePerGas),gasLimit:(0,c.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,c.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:e,v:void 0!==this.v?(0,c.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,c.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,c.bnToHex)(this.s):void 0}},t.prototype.errorStr=function(){return this._getSharedErrorPostfix()+" maxFeePerGas=".concat(this.maxFeePerGas," maxPriorityFeePerGas=").concat(this.maxPriorityFeePerGas)},t.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},t}(h.BaseTransaction);t.default=l},52385:function(e,t,r){var i,n=r(48834).Buffer,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},s=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(t,"__esModule",{value:!0});var c=r(47144),h=r(15204),u=r(88871),d=r(73165),f=n.from(1..toString(16).padStart(2,"0"),"hex"),l=function(e){function t(t,r){var i,n;void 0===r&&(r={});var o=e.call(this,a(a({},t),{type:1}))||this;o.DEFAULT_HARDFORK="berlin";var s=t.chainId,h=t.accessList,f=t.gasPrice;if(o.common=o._getCommon(r.common,s),o.chainId=o.common.chainIdBN(),!o.common.isActivatedEIP(2930))throw new Error("EIP-2930 not enabled on Common");o.activeCapabilities=o.activeCapabilities.concat([2718,2930]);var l=d.AccessLists.getAccessListData(null!=h?h:[]);if(o.accessList=l.accessList,o.AccessListJSON=l.AccessListJSON,d.AccessLists.verifyAccessList(o.accessList),o.gasPrice=new c.BN((0,c.toBuffer)(""===f?"0x":f)),o._validateCannotExceedMaxInteger({gasPrice:o.gasPrice}),o.gasPrice.mul(o.gasLimit).gt(c.MAX_INTEGER)){var v=o._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");throw new Error(v)}if(o.v&&!o.v.eqn(0)&&!o.v.eqn(1))throw v=o._errorMsg("The y-parity of the transaction should either be 0 or 1"),new Error(v);if(o.common.gteHardfork("homestead")&&(null===(i=o.s)||void 0===i?void 0:i.gt(u.N_DIV_2)))throw v=o._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"),new Error(v);return(null===(n=null==r?void 0:r.freeze)||void 0===n||n)&&Object.freeze(o),o}return o(t,e),Object.defineProperty(t.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),t.fromTxData=function(e,r){return void 0===r&&(r={}),new t(e,r)},t.fromSerializedTx=function(e,r){if(void 0===r&&(r={}),!e.slice(0,1).equals(f))throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(1,", received: ").concat(e.slice(0,1).toString("hex")));var i=c.rlp.decode(e.slice(1));if(!Array.isArray(i))throw new Error("Invalid serialized tx input: must be array");return t.fromValuesArray(i,r)},t.fromRlpSerializedTx=function(e,r){return void 0===r&&(r={}),t.fromSerializedTx(e,r)},t.fromValuesArray=function(e,r){if(void 0===r&&(r={}),8!==e.length&&11!==e.length)throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");var i=s(e,11),n=i[0],o=i[1],a=i[2],h=i[3],u=i[4],d=i[5],f=i[6],l=i[7],v=i[8],p=i[9],g=i[10];return(0,c.validateNoLeadingZeroes)({nonce:o,gasPrice:a,gasLimit:h,value:d,v,r:p,s:g}),new t({chainId:new c.BN(n),nonce:o,gasPrice:a,gasLimit:h,to:u,value:d,data:f,accessList:null!=l?l:[],v:void 0!==v?new c.BN(v):void 0,r:p,s:g},r)},t.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var t=e.prototype.getDataFee.call(this);return t.iaddn(d.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:t,hardfork:this.common.hardfork()}),t},t.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},t.prototype.raw=function(){return[(0,c.bnToUnpaddedBuffer)(this.chainId),(0,c.bnToUnpaddedBuffer)(this.nonce),(0,c.bnToUnpaddedBuffer)(this.gasPrice),(0,c.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:n.from([]),(0,c.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,c.bnToUnpaddedBuffer)(this.v):n.from([]),void 0!==this.r?(0,c.bnToUnpaddedBuffer)(this.r):n.from([]),void 0!==this.s?(0,c.bnToUnpaddedBuffer)(this.s):n.from([])]},t.prototype.serialize=function(){var e=this.raw();return n.concat([f,c.rlp.encode(e)])},t.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var t=this.raw().slice(0,8),r=n.concat([f,c.rlp.encode(t)]);return e?(0,c.keccak256)(r):r},t.prototype.hash=function(){if(!this.isSigned()){var e=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(e)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,c.keccak256)(this.serialize())),this.cache.hash):(0,c.keccak256)(this.serialize())},t.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},t.prototype.getSenderPublicKey=function(){var e;if(!this.isSigned()){var t=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(t)}var r=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(u.N_DIV_2)))throw t=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid"),new Error(t);var i=this,n=i.yParity,o=i.r,a=i.s;try{return(0,c.ecrecover)(r,n.addn(27),(0,c.bnToUnpaddedBuffer)(o),(0,c.bnToUnpaddedBuffer)(a))}catch(e){throw t=this._errorMsg("Invalid Signature"),new Error(t)}},t.prototype._processSignature=function(e,r,i){var n={common:this.common};return t.fromTxData({chainId:this.chainId,nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new c.BN(e-27),r:new c.BN(r),s:new c.BN(i)},n)},t.prototype.toJSON=function(){var e=d.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,c.bnToHex)(this.chainId),nonce:(0,c.bnToHex)(this.nonce),gasPrice:(0,c.bnToHex)(this.gasPrice),gasLimit:(0,c.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,c.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:e,v:void 0!==this.v?(0,c.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,c.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,c.bnToHex)(this.s):void 0}},t.prototype.errorStr=function(){var e,t;return this._getSharedErrorPostfix()+" gasPrice=".concat(this.gasPrice," accessListCount=").concat(null!==(t=null===(e=this.accessList)||void 0===e?void 0:e.length)&&void 0!==t?t:0)},t.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},t}(h.BaseTransaction);t.default=l},83498:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FeeMarketEIP1559Transaction=t.TransactionFactory=t.AccessListEIP2930Transaction=t.Transaction=void 0;var a=r(91719);Object.defineProperty(t,"Transaction",{enumerable:!0,get:function(){return o(a).default}});var s=r(52385);Object.defineProperty(t,"AccessListEIP2930Transaction",{enumerable:!0,get:function(){return o(s).default}});var c=r(19175);Object.defineProperty(t,"TransactionFactory",{enumerable:!0,get:function(){return o(c).default}});var h=r(13160);Object.defineProperty(t,"FeeMarketEIP1559Transaction",{enumerable:!0,get:function(){return o(h).default}}),n(r(88871),t)},91719:function(e,t,r){var i,n=r(48834).Buffer,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},s=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(t,"__esModule",{value:!0});var c=r(47144),h=r(88871),u=function(e){function t(t,r){var i;void 0===r&&(r={});var n=e.call(this,a(a({},t),{type:0}))||this;if(n.common=n._validateTxV(n.v,r.common),n.gasPrice=new c.BN((0,c.toBuffer)(""===t.gasPrice?"0x":t.gasPrice)),n.gasPrice.mul(n.gasLimit).gt(c.MAX_INTEGER)){var o=n._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");throw new Error(o)}if(n._validateCannotExceedMaxInteger({gasPrice:n.gasPrice}),n.common.gteHardfork("spuriousDragon"))if(n.isSigned()){var s=n.v,u=n.common.chainIdBN().muln(2);(s.eq(u.addn(35))||s.eq(u.addn(36)))&&n.activeCapabilities.push(h.Capability.EIP155ReplayProtection)}else n.activeCapabilities.push(h.Capability.EIP155ReplayProtection);return(null===(i=null==r?void 0:r.freeze)||void 0===i||i)&&Object.freeze(n),n}return o(t,e),t.fromTxData=function(e,r){return void 0===r&&(r={}),new t(e,r)},t.fromSerializedTx=function(e,t){void 0===t&&(t={});var r=c.rlp.decode(e);if(!Array.isArray(r))throw new Error("Invalid serialized tx input. Must be array");return this.fromValuesArray(r,t)},t.fromRlpSerializedTx=function(e,r){return void 0===r&&(r={}),t.fromSerializedTx(e,r)},t.fromValuesArray=function(e,r){if(void 0===r&&(r={}),6!==e.length&&9!==e.length)throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");var i=s(e,9),n=i[0],o=i[1],a=i[2],h=i[3],u=i[4],d=i[5],f=i[6],l=i[7],v=i[8];return(0,c.validateNoLeadingZeroes)({nonce:n,gasPrice:o,gasLimit:a,value:u,v:f,r:l,s:v}),new t({nonce:n,gasPrice:o,gasLimit:a,to:h,value:u,data:d,v:f,r:l,s:v},r)},t.prototype.raw=function(){return[(0,c.bnToUnpaddedBuffer)(this.nonce),(0,c.bnToUnpaddedBuffer)(this.gasPrice),(0,c.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:n.from([]),(0,c.bnToUnpaddedBuffer)(this.value),this.data,void 0!==this.v?(0,c.bnToUnpaddedBuffer)(this.v):n.from([]),void 0!==this.r?(0,c.bnToUnpaddedBuffer)(this.r):n.from([]),void 0!==this.s?(0,c.bnToUnpaddedBuffer)(this.s):n.from([])]},t.prototype.serialize=function(){return c.rlp.encode(this.raw())},t.prototype._getMessageToSign=function(){var e=[(0,c.bnToUnpaddedBuffer)(this.nonce),(0,c.bnToUnpaddedBuffer)(this.gasPrice),(0,c.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:n.from([]),(0,c.bnToUnpaddedBuffer)(this.value),this.data];return this.supports(h.Capability.EIP155ReplayProtection)&&(e.push((0,c.toBuffer)(this.common.chainIdBN())),e.push((0,c.unpadBuffer)((0,c.toBuffer)(0))),e.push((0,c.unpadBuffer)((0,c.toBuffer)(0)))),e},t.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var t=this._getMessageToSign();return e?(0,c.rlphash)(t):t},t.prototype.getDataFee=function(){return this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork()?this.cache.dataFee.value:(Object.isFrozen(this)&&(this.cache.dataFee={value:e.prototype.getDataFee.call(this),hardfork:this.common.hardfork()}),e.prototype.getDataFee.call(this))},t.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},t.prototype.hash=function(){return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,c.rlphash)(this.raw())),this.cache.hash):(0,c.rlphash)(this.raw())},t.prototype.getMessageToVerifySignature=function(){if(!this.isSigned()){var e=this._errorMsg("This transaction is not signed");throw new Error(e)}var t=this._getMessageToSign();return(0,c.rlphash)(t)},t.prototype.getSenderPublicKey=function(){var e,t=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(h.N_DIV_2))){var r=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(r)}var i=this,n=i.v,o=i.r,a=i.s;try{return(0,c.ecrecover)(t,n,(0,c.bnToUnpaddedBuffer)(o),(0,c.bnToUnpaddedBuffer)(a),this.supports(h.Capability.EIP155ReplayProtection)?this.common.chainIdBN():void 0)}catch(e){throw r=this._errorMsg("Invalid Signature"),new Error(r)}},t.prototype._processSignature=function(e,r,i){var n=new c.BN(e);this.supports(h.Capability.EIP155ReplayProtection)&&n.iadd(this.common.chainIdBN().muln(2).addn(8));var o={common:this.common};return t.fromTxData({nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,v:n,r:new c.BN(r),s:new c.BN(i)},o)},t.prototype.toJSON=function(){return{nonce:(0,c.bnToHex)(this.nonce),gasPrice:(0,c.bnToHex)(this.gasPrice),gasLimit:(0,c.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,c.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),v:void 0!==this.v?(0,c.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,c.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,c.bnToHex)(this.s):void 0}},t.prototype._validateTxV=function(e,t){var r;if(void 0!==e&&!e.eqn(0)&&(!t||t.gteHardfork("spuriousDragon"))&&!e.eqn(27)&&!e.eqn(28))if(t){var i=t.chainIdBN().muln(2);if(!e.eq(i.addn(35))&&!e.eq(i.addn(36)))throw new Error("Incompatible EIP155-based V ".concat(e," and chain id ").concat(t.chainIdBN(),". See the Common parameter of the Transaction constructor to set the chain id."))}else{var n;n=e.subn(35).isEven()?35:36,r=e.subn(n).divn(2)}return this._getCommon(t,r)},t.prototype._unsignedTxImplementsEIP155=function(){return this.common.gteHardfork("spuriousDragon")},t.prototype._signedTxImplementsEIP155=function(){if(!this.isSigned()){var e=this._errorMsg("This transaction is not signed");throw new Error(e)}var t=this.common.gteHardfork("spuriousDragon"),r=this.v,i=this.common.chainIdBN().muln(2);return(r.eq(i.addn(35))||r.eq(i.addn(36)))&&t},t.prototype.errorStr=function(){return this._getSharedErrorPostfix()+" gasPrice=".concat(this.gasPrice)},t.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},t}(r(15204).BaseTransaction);t.default=u},19175:(e,t,r)=>{var i=r(48834).Buffer;Object.defineProperty(t,"__esModule",{value:!0});var n=r(47144),o=r(83498),a=function(){function e(){}return e.fromTxData=function(e,t){if(void 0===t&&(t={}),"type"in e&&void 0!==e.type){var r=new n.BN((0,n.toBuffer)(e.type)).toNumber();if(0===r)return o.Transaction.fromTxData(e,t);if(1===r)return o.AccessListEIP2930Transaction.fromTxData(e,t);if(2===r)return o.FeeMarketEIP1559Transaction.fromTxData(e,t);throw new Error("Tx instantiation with type ".concat(r," not supported"))}return o.Transaction.fromTxData(e,t)},e.fromSerializedData=function(e,t){if(void 0===t&&(t={}),e[0]<=127){var r=void 0;switch(e[0]){case 1:r=2930;break;case 2:r=1559;break;default:throw new Error("TypedTransaction with ID ".concat(e[0]," unknown"))}return 1559===r?o.FeeMarketEIP1559Transaction.fromSerializedTx(e,t):o.AccessListEIP2930Transaction.fromSerializedTx(e,t)}return o.Transaction.fromSerializedTx(e,t)},e.fromBlockBodyData=function(e,t){if(void 0===t&&(t={}),i.isBuffer(e))return this.fromSerializedData(e,t);if(Array.isArray(e))return o.Transaction.fromValuesArray(e,t);throw new Error("Cannot decode transaction: unknown type input")},e.getTransactionClass=function(e,t){if(void 0===e&&(e=0),0==e||e>=128&&e<=255)return o.Transaction;switch(e){case 1:return o.AccessListEIP2930Transaction;case 2:return o.FeeMarketEIP1559Transaction;default:throw new Error("TypedTransaction with ID ".concat(e," unknown"))}},e}();t.default=a},88871:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.N_DIV_2=t.isAccessList=t.isAccessListBuffer=t.Capability=void 0;var i,n=r(47144);function o(e){if(0===e.length)return!0;var t=e[0];return!!Array.isArray(t)}(i=t.Capability||(t.Capability={}))[i.EIP155ReplayProtection=155]="EIP155ReplayProtection",i[i.EIP1559FeeMarket=1559]="EIP1559FeeMarket",i[i.EIP2718TypedTransaction=2718]="EIP2718TypedTransaction",i[i.EIP2930AccessLists=2930]="EIP2930AccessLists",t.isAccessListBuffer=o,t.isAccessList=function(e){return!o(e)},t.N_DIV_2=new n.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)},73165:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AccessLists=void 0;var i=r(47144),n=r(88871),o=function(){function e(){}return e.getAccessListData=function(e){var t,r;if(e&&(0,n.isAccessList)(e)){t=e;for(var o=[],a=0;a<e.length;a++){for(var s=e[a],c=(0,i.toBuffer)(s.address),h=[],u=0;u<s.storageKeys.length;u++)h.push((0,i.toBuffer)(s.storageKeys[u]));o.push([c,h])}r=o}else{r=null!=e?e:[];var d=[];for(a=0;a<r.length;a++){var f=r[a],l=(0,i.bufferToHex)(f[0]),v=[];for(s=0;s<f[1].length;s++)v.push((0,i.bufferToHex)(f[1][s]));var p={address:l,storageKeys:v};d.push(p)}t=d}return{AccessListJSON:t,accessList:r}},e.verifyAccessList=function(e){for(var t=0;t<e.length;t++){var r=e[t],i=r[0],n=r[1];if(void 0!==r[2])throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");if(20!=i.length)throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");for(var o=0;o<n.length;o++)if(32!=n[o].length)throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")}},e.getAccessListJSON=function(e){for(var t=[],r=0;r<e.length;r++){for(var n=e[r],o={address:"0x"+(0,i.setLengthLeft)(n[0],20).toString("hex"),storageKeys:[]},a=n[1],s=0;s<a.length;s++){var c=a[s];o.storageKeys.push("0x"+(0,i.setLengthLeft)(c,32).toString("hex"))}t.push(o)}return t},e.getDataFeeEIP2930=function(e,t){for(var r=t.param("gasPrices","accessListStorageKeyCost"),i=t.param("gasPrices","accessListAddressCost"),n=0,o=0;o<e.length;o++)n+=e[o][1].length;return e.length*i+n*r},e}();t.AccessLists=o}}]);