(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8094],{94723:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.EthereumProviderError=r.EthereumRpcError=void 0;const o=t(77847);class s extends Error{constructor(e,r,t){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string.');super(r),this.code=e,void 0!==t&&(this.data=t)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return o.default(this.serialize(),n,2)}}function n(e,r){if("[Circular]"!==r)return r}r.EthereumRpcError=s,r.EthereumProviderError=class extends s{constructor(e,r,t){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,r,t)}}},54792:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.errorValues=r.errorCodes=void 0,r.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},r.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}},98159:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethErrors=void 0;const o=t(94723),s=t(20894),n=t(54792);function i(e,r){const[t,n]=d(r);return new o.EthereumRpcError(e,t||s.getMessageFromCode(e),n)}function a(e,r){const[t,n]=d(r);return new o.EthereumProviderError(e,t||s.getMessageFromCode(e),n)}function d(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:r,data:t}=e;if(r&&"string"!=typeof r)throw new Error("Must specify string message.");return[r||void 0,t]}}return[]}r.ethErrors={rpc:{parse:e=>i(n.errorCodes.rpc.parse,e),invalidRequest:e=>i(n.errorCodes.rpc.invalidRequest,e),invalidParams:e=>i(n.errorCodes.rpc.invalidParams,e),methodNotFound:e=>i(n.errorCodes.rpc.methodNotFound,e),internal:e=>i(n.errorCodes.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:r}=e;if(!Number.isInteger(r)||r>-32005||r<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(r,e)},invalidInput:e=>i(n.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>i(n.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>i(n.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>i(n.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>i(n.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>i(n.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>a(n.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>a(n.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>a(n.errorCodes.provider.unsupportedMethod,e),disconnected:e=>a(n.errorCodes.provider.disconnected,e),chainDisconnected:e=>a(n.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:r,message:t,data:s}=e;if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string');return new o.EthereumProviderError(r,t,s)}}}},58094:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getMessageFromCode=r.serializeError=r.EthereumProviderError=r.EthereumRpcError=r.ethErrors=r.errorCodes=void 0;const o=t(94723);Object.defineProperty(r,"EthereumRpcError",{enumerable:!0,get:function(){return o.EthereumRpcError}}),Object.defineProperty(r,"EthereumProviderError",{enumerable:!0,get:function(){return o.EthereumProviderError}});const s=t(20894);Object.defineProperty(r,"serializeError",{enumerable:!0,get:function(){return s.serializeError}}),Object.defineProperty(r,"getMessageFromCode",{enumerable:!0,get:function(){return s.getMessageFromCode}});const n=t(98159);Object.defineProperty(r,"ethErrors",{enumerable:!0,get:function(){return n.ethErrors}});const i=t(54792);Object.defineProperty(r,"errorCodes",{enumerable:!0,get:function(){return i.errorCodes}})},20894:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.serializeError=r.isValidCode=r.getMessageFromCode=r.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const o=t(54792),s=t(94723),n=o.errorCodes.rpc.internal,i={code:n,message:a(n)};function a(e,t="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(e)){const t=e.toString();if(l(o.errorValues,t))return o.errorValues[t].message;if(u(e))return r.JSON_RPC_SERVER_ERROR_MESSAGE}return t}function d(e){if(!Number.isInteger(e))return!1;const r=e.toString();return!!o.errorValues[r]||!!u(e)}function u(e){return e>=-32099&&e<=-32e3}function c(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}function l(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",r.getMessageFromCode=a,r.isValidCode=d,r.serializeError=function(e,{fallbackError:r=i,shouldIncludeStack:t=!1}={}){var o,n;if(!r||!Number.isInteger(r.code)||"string"!=typeof r.message)throw new Error("Must provide fallback error with integer number code and string message.");if(e instanceof s.EthereumRpcError)return e.serialize();const u={};if(e&&"object"==typeof e&&!Array.isArray(e)&&l(e,"code")&&d(e.code)){const r=e;u.code=r.code,r.message&&"string"==typeof r.message?(u.message=r.message,l(r,"data")&&(u.data=r.data)):(u.message=a(u.code),u.data={originalError:c(e)})}else{u.code=r.code;const t=null===(o=e)||void 0===o?void 0:o.message;u.message=t&&"string"==typeof t?t:r.message,u.data={originalError:c(e)}}const p=null===(n=e)||void 0===n?void 0:n.stack;return t&&e&&p&&"string"==typeof p&&(u.stack=p),u}},77847:e=>{e.exports=i,i.default=i,i.stable=c,i.stableStringify=c;var r="[...]",t="[Circular]",o=[],s=[];function n(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function i(e,r,t,i){var a;void 0===i&&(i=n()),d(e,"",0,[],void 0,0,i);try{a=0===s.length?JSON.stringify(e,r,t):JSON.stringify(e,p(r),t)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==o.length;){var u=o.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return a}function a(e,r,t,n){var i=Object.getOwnPropertyDescriptor(n,t);void 0!==i.get?i.configurable?(Object.defineProperty(n,t,{value:e}),o.push([n,t,r,i])):s.push([r,t,e]):(n[t]=e,o.push([n,t,r]))}function d(e,o,s,n,i,u,c){var l;if(u+=1,"object"==typeof e&&null!==e){for(l=0;l<n.length;l++)if(n[l]===e)return void a(t,e,o,i);if(void 0!==c.depthLimit&&u>c.depthLimit)return void a(r,e,o,i);if(void 0!==c.edgesLimit&&s+1>c.edgesLimit)return void a(r,e,o,i);if(n.push(e),Array.isArray(e))for(l=0;l<e.length;l++)d(e[l],l,l,n,e,u,c);else{var p=Object.keys(e);for(l=0;l<p.length;l++){var f=p[l];d(e[f],f,l,n,e,u,c)}}n.pop()}}function u(e,r){return e<r?-1:e>r?1:0}function c(e,r,t,i){void 0===i&&(i=n());var a,d=l(e,"",0,[],void 0,0,i)||e;try{a=0===s.length?JSON.stringify(d,r,t):JSON.stringify(d,p(r),t)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==o.length;){var u=o.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return a}function l(e,s,n,i,d,c,p){var f;if(c+=1,"object"==typeof e&&null!==e){for(f=0;f<i.length;f++)if(i[f]===e)return void a(t,e,s,d);try{if("function"==typeof e.toJSON)return}catch(e){return}if(void 0!==p.depthLimit&&c>p.depthLimit)return void a(r,e,s,d);if(void 0!==p.edgesLimit&&n+1>p.edgesLimit)return void a(r,e,s,d);if(i.push(e),Array.isArray(e))for(f=0;f<e.length;f++)l(e[f],f,f,i,e,c,p);else{var m={},g=Object.keys(e).sort(u);for(f=0;f<g.length;f++){var h=g[f];l(e[h],h,f,i,e,c,p),m[h]=e[h]}if(void 0===d)return m;o.push([d,s,e]),d[s]=m}i.pop()}}function p(e){return e=void 0!==e?e:function(e,r){return r},function(r,t){if(s.length>0)for(var o=0;o<s.length;o++){var n=s[o];if(n[1]===r&&n[0]===t){t=n[2],s.splice(o,1);break}}return e.call(this,r,t)}}}}]);