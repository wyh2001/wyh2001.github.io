/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["c:/website/public/112/index.html","bc0e62eab275c4ab02ff072a75b023f6"],["c:/website/public/118/index.html","a61ab9c151b4d14eea36d5f9f4b09cd8"],["c:/website/public/125/index.html","95aad13c30a54a57cbbb4e9826fadce3"],["c:/website/public/165/index.html","61f209acd5cd9125bd88547854a99dcc"],["c:/website/public/291/index.html","e3a35a0e27319d12a6bc8ae90e2433d3"],["c:/website/public/321/index.html","59d79f5046c69439acf36dd64d2bcd4a"],["c:/website/public/344/index.html","bc449bd6ccb101122365d2ebdd8d6bcd"],["c:/website/public/35/index.html","01385073e8ea35c43229bd6a522453ef"],["c:/website/public/355/index.html","f1f9f83040a68c861448cbce2496a22c"],["c:/website/public/404.html","603f67670be5a82e6b11b192bcc24a27"],["c:/website/public/44-2/index.html","7c4fc8f58384bdfa965d2477e7b6408e"],["c:/website/public/63/index.html","cd6496a054bc0e27115cfcc6ae092d3c"],["c:/website/public/71/index.html","0f3e0c33e52e099645aeef5ed93607d4"],["c:/website/public/86/index.html","f83e2e124ed080f39fa212a82ad2d132"],["c:/website/public/about/index.html","d340f98cd2d6a2f441c322281f96f69d"],["c:/website/public/archives/2017/07/index.html","b66ec886b519e0f03a5b36b83972812a"],["c:/website/public/archives/2017/08/index.html","e77508eb1f206d3f151c100011f0736e"],["c:/website/public/archives/2017/11/index.html","6d83af0024a714fc67dabb433e9a5772"],["c:/website/public/archives/2017/index.html","d9c37cf463a661aca156e42e4252343c"],["c:/website/public/archives/2018/01/index.html","eff98e49e9a87568208cb7b7ad8c288f"],["c:/website/public/archives/2018/06/index.html","f437af9ba187bb41fec913359d565999"],["c:/website/public/archives/2018/07/index.html","7554072e2a78781ef384a1c424d3bea2"],["c:/website/public/archives/2018/index.html","b59794f19cf4e35f67006f9d004b8e22"],["c:/website/public/archives/2019/08/index.html","ed8e9ca749e49a400afcb8a6ff8d801d"],["c:/website/public/archives/2019/index.html","ed8e9ca749e49a400afcb8a6ff8d801d"],["c:/website/public/archives/2020/02/index.html","6c7be7452112031adc6fbd736bc7e2bc"],["c:/website/public/archives/2020/03/index.html","ea5503851ed166076954834369f98707"],["c:/website/public/archives/2020/04/index.html","fb83f17f44d6bc657bf168c3da2cbc58"],["c:/website/public/archives/2020/index.html","1c2ff4360d219db8a78675e48422f362"],["c:/website/public/archives/index.html","8e56c8d3010989ca0b647dec0dc791ea"],["c:/website/public/archives/page/2/index.html","5ca6dd38eef8947b423c35b0af7cc81e"],["c:/website/public/categories/IT/index.html","0b46a90c81b068d7802ed910699c4d24"],["c:/website/public/categories/IT/生活/index.html","600201a953975e6b434fdec27203ef82"],["c:/website/public/categories/index.html","acef8d6c05261c78bf410aab4fe99179"],["c:/website/public/categories/生活/index.html","61ba8efa0a070afbf770304bc7124d44"],["c:/website/public/css/black.css","0e49ad979f2c788566803f18cf47dc28"],["c:/website/public/css/main.css","4c929d0f64b03ca3eb9ef6d46acc604a"],["c:/website/public/e5-85-b3-e4-ba-8e/index.html","292e0054a76442ca84a9b4c7197a7cba"],["c:/website/public/e7-95-99-e8-a8-80-e6-9d-bf/index.html","b0d45120fa0b3e49c7d014ae452dcac3"],["c:/website/public/img/apple-touch-icon.png","5603316bb5bc54a9d5cab14fddd4c510"],["c:/website/public/img/apple.jpg","4fdac1b2ccfbff08b42304eb0b7ac5c9"],["c:/website/public/img/avatar.jpg","da8cdfada62e70ce451c53bdebc0376d"],["c:/website/public/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["c:/website/public/img/bill_gates.jpg","623576f0c64b21c9b36fbeb247532469"],["c:/website/public/img/default.jpg","92c41908e31356a10f59ed5e0f10e148"],["c:/website/public/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["c:/website/public/img/favicon.png","c3afd11c7efe6ce1f6c525fc4a9f29d0"],["c:/website/public/img/favicon1.png","5603316bb5bc54a9d5cab14fddd4c510"],["c:/website/public/img/ics11.png","c40fdb9598d80dead69a02114f74f323"],["c:/website/public/img/ics12.png","1bf691baec0bc3689ef819d59e542b61"],["c:/website/public/img/ics13.png","0c08ff700efd7df971f8d7e7bf7c0729"],["c:/website/public/img/ics2345.png","b35d683a22196cedcd0018fdac828a56"],["c:/website/public/img/ics678.png","ebe236a3977c83d76ddf39b8263ffcfd"],["c:/website/public/img/ics910.png","a0a1a59bc71578a856b9ba6fd0dca149"],["c:/website/public/img/landscape.jpg","fd292a8a4843edc49166ae2a1b5e674f"],["c:/website/public/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["c:/website/public/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["c:/website/public/img/snow-mountain.jpg","937cb8523a8ad1abf1d35bd042c2330d"],["c:/website/public/img/ssl.jpg","2e668455a469811144a8b267bb283a41"],["c:/website/public/index.html","11b887d546485b2b38a686cf567fc875"],["c:/website/public/js/lazyload.js","deaf6034caf451aba4fa944ff0ace5a9"],["c:/website/public/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["c:/website/public/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["c:/website/public/lib/prettify/github-v2.min.css","7e0f0e29f43c395a37af8560b1362285"],["c:/website/public/lib/prettify/tomorrow-night-eighties.min.css","5999a3c1bf9481a6becd57fda4363418"],["c:/website/public/lib/prettify/tomorrow-night.min.css","4ae1cca7f04218d26c0d1f99c931c4cf"],["c:/website/public/lib/prettify/tomorrow.min.css","7a3fed42c8fc5d2772544f339bd504ab"],["c:/website/public/links/index.html","b0268b662fd58d507017f9c5b57270f2"],["c:/website/public/page/2/index.html","a00211675fae88748f4dc3ec8220fd90"],["c:/website/public/sample-page-2/index.html","65184822dad13781e5fda1abcd384d4f"],["c:/website/public/sample-page/index.html","9046c2dab64cbacd5301d7f53a2450fa"],["c:/website/public/tags/APP/index.html","77c41f7f6bcd607511f95f724a123a54"],["c:/website/public/tags/Andriod/index.html","e08795a3547d4dd035370d167f681f64"],["c:/website/public/tags/Chrome/index.html","2666f6ee318d6b5f29d04d2f549f3a41"],["c:/website/public/tags/Firefox/index.html","bf1bb3ebd1f75b36ba9808f438568789"],["c:/website/public/tags/Hexo/index.html","5e60be68f7f288edaf86f48a8cc9b7c8"],["c:/website/public/tags/SSL/index.html","95cf7e688d667370f6e81eb51347d269"],["c:/website/public/tags/WordPress/index.html","15383260604e8d1332fc19f98a27ff9f"],["c:/website/public/tags/index.html","be9906908b5a2e13a55b0d763c133625"],["c:/website/public/tags/浏览器/index.html","117906586fda8e456f2aed4e46fb7902"],["c:/website/public/tags/随感/index.html","38176e1386be9afc581e86eeee0e7ad3"],["c:/website/public/wp-content/uploads/2017/08/1666982_L-1024x585.png","b4642736deee567198e96d8679d28741"],["c:/website/public/wp-content/uploads/2017/08/1666982_L-150x150.png","0759427a01fd9f3078f05a46d991af70"],["c:/website/public/wp-content/uploads/2017/08/1666982_L-1536x877.png","123074927469559cba2cb9010e6e8b35"],["c:/website/public/wp-content/uploads/2017/08/1666982_L-300x171.png","4c106a6e37f76b7442567fe1ea082bb3"],["c:/website/public/wp-content/uploads/2017/08/1666982_L-768x438.png","6717e032b5c87bd726a20bc9b6819845"],["c:/website/public/wp-content/uploads/2017/08/1666982_L.png","6863358bdd981386c376fdcf6ba2fc44"],["c:/website/public/wp-content/uploads/2017/08/2181896_L-1024x683.jpg","912e2fda0e37c769c73d7ccec566010b"],["c:/website/public/wp-content/uploads/2017/08/2181896_L-150x150.jpg","04011270aebcdad34db38684c1478eba"],["c:/website/public/wp-content/uploads/2017/08/2181896_L-300x200.jpg","b5fbca7a46e8a988ecb38a9ceaead258"],["c:/website/public/wp-content/uploads/2017/08/2181896_L-750x500.jpg","8764d15941ad3cf8f606b5cc6dfe40fc"],["c:/website/public/wp-content/uploads/2017/08/2181896_L-768x512.jpg","1f5e90f0991a35122108a886d300e8d5"],["c:/website/public/wp-content/uploads/2017/08/2181896_L.jpg","6931175fee1ca3c79774700dc66dac5c"],["c:/website/public/wp-content/uploads/2017/08/32132获-150x150.png","f0898d47e21114f3b4be4b468f59d016"],["c:/website/public/wp-content/uploads/2017/08/32132获-300x257.png","cd1c4ce38ab54ee1c5436e5b9719390a"],["c:/website/public/wp-content/uploads/2017/08/32132获.png","20601a84824cf0ea26a03a0eb70dd2ad"],["c:/website/public/wp-content/uploads/2017/08/500450829-1024x576.jpg","5a143a2752a820e881c62d2c66c5c5c1"],["c:/website/public/wp-content/uploads/2017/08/500450829-150x150.jpg","1254a368941e3a3c436b259a55431571"],["c:/website/public/wp-content/uploads/2017/08/500450829-300x169.jpg","dcd52199e40138f978d16468bd8d701d"],["c:/website/public/wp-content/uploads/2017/08/500450829-750x422.jpg","c881e8f80d005f7d28c0b508eeb1334e"],["c:/website/public/wp-content/uploads/2017/08/500450829-768x432.jpg","12564184931909586ee3a709551abfcf"],["c:/website/public/wp-content/uploads/2017/08/500450829.jpg","c069414b2a3b0a98f801fc455f3b7d88"],["c:/website/public/wp-content/uploads/2017/08/55555获-150x150.png","2c803a2be0db3e7f17d7890a380e19d5"],["c:/website/public/wp-content/uploads/2017/08/55555获-300x257.png","36ea8aaf81901156a6cb45d038ec9d82"],["c:/website/public/wp-content/uploads/2017/08/55555获.png","cc676c6a0d7c5c1c8150eef28542c9f6"],["c:/website/public/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09-150x150.png","ed3a64c6d8f2aaabcf91e7d37483f214"],["c:/website/public/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09-169x300.png","7c6a72975e1d529aea5612d5e4b60991"],["c:/website/public/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09-576x1024.png","3798cc1c8ee5334d8c27d4630d78f20a"],["c:/website/public/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09.png","cec221c1875eb7c950ea81dbd2572ad4"],["c:/website/public/wp-content/uploads/2017/08/android-994910_60_720-150x150.jpg","d417068a33009a708072974979f39c7d"],["c:/website/public/wp-content/uploads/2017/08/android-994910_60_720-300x199.jpg","977ee4ada363f466e36d205ce83d4766"],["c:/website/public/wp-content/uploads/2017/08/android-994910_60_720-750x498.jpg","5d4fea7179a781469cdcdc6a9b298338"],["c:/website/public/wp-content/uploads/2017/08/android-994910_60_720-768x510.jpg","a05b46211415845db94763f93802249b"],["c:/website/public/wp-content/uploads/2017/08/android-994910_60_720.jpg","423a547b7e8b132538c6d25545cab464"],["c:/website/public/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-1024x640.jpg","2f98e33e61c578ee945c44d993f7f205"],["c:/website/public/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-150x150.jpg","432b45791a9e92e4fdf2e7a115c96c2a"],["c:/website/public/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-300x188.jpg","1807137e846158c4c51029c93b58f771"],["c:/website/public/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-750x469.jpg","66cf3317264c4973b365ae179916a3b4"],["c:/website/public/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-768x480.jpg","b62eae80e509fbeff2620f4d0153f3d3"],["c:/website/public/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217.jpg","02c6114bc7353a45d92322264721894d"],["c:/website/public/wp-content/uploads/2017/08/ghjklgfhjklhjk-150x150.jpg","a668ff57353daa9acd2137c362261bd0"],["c:/website/public/wp-content/uploads/2017/08/ghjklgfhjklhjk-300x195.jpg","51a922fc1825a217bee8b93b9c26bf8c"],["c:/website/public/wp-content/uploads/2017/08/ghjklgfhjklhjk.jpg","62f4a252a13d09a94efdfdde7553952a"],["c:/website/public/wp-content/uploads/2017/08/safety-2659095_1920-1024x576.jpg","7f09f93d5337034af3f780dd24075d95"],["c:/website/public/wp-content/uploads/2017/08/safety-2659095_1920-150x150.jpg","693ecbf92e9ec433e4d7e2b725603e03"],["c:/website/public/wp-content/uploads/2017/08/safety-2659095_1920-300x169.jpg","b10679051d3b2e045e5d525c0b64b9d6"],["c:/website/public/wp-content/uploads/2017/08/safety-2659095_1920-750x422.jpg","f0b9e9f3ff3ed09cf441b9eca3b5fe83"],["c:/website/public/wp-content/uploads/2017/08/safety-2659095_1920-768x432.jpg","8bea7e34a4d389a8b632cacab26ac600"],["c:/website/public/wp-content/uploads/2017/08/safety-2659095_1920.jpg","2e668455a469811144a8b267bb283a41"],["c:/website/public/wp-content/uploads/2017/08/截图-1024x576.png","42fc07295d139e92f7a01bcc19b67d8e"],["c:/website/public/wp-content/uploads/2017/08/截图-150x150.png","0e9f81ccc90e53519ad9629cead7f833"],["c:/website/public/wp-content/uploads/2017/08/截图-300x169.png","23b935bc800505495eca45668740d0bc"],["c:/website/public/wp-content/uploads/2017/08/截图-750x422.png","3463a869cd948ac19ab857e689eee30a"],["c:/website/public/wp-content/uploads/2017/08/截图-768x432.png","b2682c38d8631cbd104f5767f8a41a4f"],["c:/website/public/wp-content/uploads/2017/08/截图.png","e05e252d5797ae1d2ad22c7d385ae588"],["c:/website/public/wp-content/uploads/2017/08/捕获-150x150.png","d212e47cb7193203eb18de6488c3e85c"],["c:/website/public/wp-content/uploads/2017/08/捕获-300x111.png","600773b6d65c336c65a53376a60c1a0d"],["c:/website/public/wp-content/uploads/2017/08/捕获.png","e898007b0c78bc21ffc1b2029c9c8c97"],["c:/website/public/wp-content/uploads/2017/08/捕获154154-150x150.png","0a1acb20895dcfa0a40e945a26bb108e"],["c:/website/public/wp-content/uploads/2017/08/捕获154154-300x257.png","bee680e9683b03feb44217987d91bad8"],["c:/website/public/wp-content/uploads/2017/08/捕获154154.png","6b2088002748845b9c6efdd7eb5cfcaf"],["c:/website/public/wp-content/uploads/2017/08/捕获544554-150x150.png","55b1ccb4075bbc58e3839704e95c2d35"],["c:/website/public/wp-content/uploads/2017/08/捕获544554-300x257.png","0c8bb83e5d09ffc52500dd0fdd3adac3"],["c:/website/public/wp-content/uploads/2017/08/捕获544554.png","b8c2cdeb632d0b1458612ba3bfbde41f"],["c:/website/public/wp-content/uploads/2017/08/捕获5555-150x150.png","8a31c4ff31d1e1fece257ffea614a747"],["c:/website/public/wp-content/uploads/2017/08/捕获5555-300x257.png","1e973c6480443403bac7bd05e31fc687"],["c:/website/public/wp-content/uploads/2017/08/捕获5555.png","b012f9e288cb19ebbf349865c6514160"],["c:/website/public/wp-content/uploads/2018/09/screenshot.png","e898007b0c78bc21ffc1b2029c9c8c97"],["c:/website/public/wp-content/uploads/2019/08/1.png","9e4eb4c3deb00d67b2c059f453179a28"],["c:/website/public/wp-content/uploads/2019/08/112.png","63f2eceb90193e3d3da7999181245ce4"],["c:/website/public/wp-content/uploads/2019/08/2019-08-31-150721-1024x455.jpg","ec50e1002ff476380be9f873520ac5fb"],["c:/website/public/wp-content/uploads/2019/08/2019-08-31-151535-1024x655.jpg","b0f2a98e8818f08b6d0ecadd2aaaf7c3"],["c:/website/public/wp-content/uploads/2019/08/2019-08-31-152345-1024x651.jpg","1ecb94a113edc311830768f80a2d98b4"],["c:/website/public/wp-content/uploads/2019/08/2019-08-31-152641-1024x568.jpg","ef437b433359ee5b4e04f15c376c2e4a"],["c:/website/public/wp-content/uploads/2019/08/22222-1024x652.png","0dd7b651a054780505ea59ade06f7c08"],["c:/website/public/wp-content/uploads/2019/08/43567865432-1024x416.png","954a4e0d8c5cd16330f5246d45087e2a"],["c:/website/public/wp-content/uploads/2019/08/4655432345676543-1024x648.png","27626e71c28f6ae09044f25f20e14ebd"],["c:/website/public/wp-content/uploads/2019/08/image-1024x552.png","37365f4925960b9cca362f07fbf2ba14"],["c:/website/public/wp-content/uploads/2019/08/image-2-1024x635.png","a3b01faeb35eb4e713ef9f96682f011f"],["c:/website/public/wp-content/uploads/2019/08/image-3-1024x551.png","1c996a32c5f213615af080f24a8dd0e2"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-1-150x150.jpg","8a7aaf62f186c1784712cafe9f8ad208"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-1-300x225.jpg","9fcb5de26eb444743ad917293c063842"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-1-768x576.jpg","3869827445ee7a32e8538af9c7f1e3c8"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-1.jpg","8347e596634cc23f04183d6cdea872b8"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-1024x768.jpg","616de9a1b2b584d2a4de6c9d0fa97f6e"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-150x150.jpg","8a7aaf62f186c1784712cafe9f8ad208"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-300x225.jpg","9fcb5de26eb444743ad917293c063842"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-768x576.jpg","3869827445ee7a32e8538af9c7f1e3c8"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768-825x510.jpg","eb61a6600d06219d67cf680bf65aedab"],["c:/website/public/wp-content/uploads/2019/09/1052010_XL-1024x768.jpg","8347e596634cc23f04183d6cdea872b8"],["c:/website/public/wp-content/uploads/2019/09/154154-150x150.png","0a1acb20895dcfa0a40e945a26bb108e"],["c:/website/public/wp-content/uploads/2019/09/154154-300x257.png","bee680e9683b03feb44217987d91bad8"],["c:/website/public/wp-content/uploads/2019/09/154154.png","6b2088002748845b9c6efdd7eb5cfcaf"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-1024x768.jpg","303480e1e7f7d498988c60f28c9a4ecd"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-150x150.jpg","09b8d9556d8e99af88de0bcc2809be35"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-1536x1152.jpg","8d6dcb6fd8869e0ac6b47daaa1813190"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-1568x1176.jpg","2ee6d677f887091fdf7cf12f558269c9"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-2048x1536.jpg","aec2b06f4e33509e384ac9a94579cbef"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-300x225.jpg","52d313c0103df46ddff7d99973bca729"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-768x576.jpg","366f17a2bd1bd2cead5ba5f3f667db55"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1-scaled.jpg","0f08758e55e06f52c621aa83ed5c95ae"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1.jpg","bd8c8946c86b6c1db5fb8a6fc396c235"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-1024x768.jpg","303480e1e7f7d498988c60f28c9a4ecd"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-150x150.jpg","09b8d9556d8e99af88de0bcc2809be35"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-300x225.jpg","52d313c0103df46ddff7d99973bca729"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-768x576.jpg","366f17a2bd1bd2cead5ba5f3f667db55"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1-825x510.jpg","1b5503cd80709c45ac8c3d39471ad9f6"],["c:/website/public/wp-content/uploads/2019/09/20170729210449-1.jpg","bd8c8946c86b6c1db5fb8a6fc396c235"],["c:/website/public/wp-content/uploads/2019/09/20170812090225.jpg","af0e1d4f8d4485b3ca1e9eef3761c421"],["c:/website/public/wp-content/uploads/2019/09/32132鑾_150x150.png","f0898d47e21114f3b4be4b468f59d016"],["c:/website/public/wp-content/uploads/2019/09/32132鑾_300x257.png","cd1c4ce38ab54ee1c5436e5b9719390a"],["c:/website/public/wp-content/uploads/2019/09/32132鑾_739x510.png","7c4188d5c73f41aa0ac1333f49bbfd2e"],["c:/website/public/wp-content/uploads/2019/09/544554-150x150.png","55b1ccb4075bbc58e3839704e95c2d35"],["c:/website/public/wp-content/uploads/2019/09/544554-300x257.png","0c8bb83e5d09ffc52500dd0fdd3adac3"],["c:/website/public/wp-content/uploads/2019/09/544554.png","b8c2cdeb632d0b1458612ba3bfbde41f"],["c:/website/public/wp-content/uploads/2019/09/5555-150x150.png","8a31c4ff31d1e1fece257ffea614a747"],["c:/website/public/wp-content/uploads/2019/09/5555-300x257.png","1e973c6480443403bac7bd05e31fc687"],["c:/website/public/wp-content/uploads/2019/09/5555.png","b012f9e288cb19ebbf349865c6514160"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-1024x576.jpg","603b0d5f0d6b51d448274983dd259fbf"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-150x150.jpg","fcb0763850c665dc8f0daad182e90793"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-1536x864.jpg","9a4895d2150e58ee79e9d76d78e3f0c0"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-1568x882.jpg","9e3eca6f16857da0f66bb3699b32ec95"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-300x169.jpg","9363fbb2873fb284167868ba64601d3d"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-768x432.jpg","660e23116fcbc5d55e1fa2162e3e973d"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1.jpg","a60dd02d0d87732b43ada6d5e40b94ba"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1024x576.jpg","603b0d5f0d6b51d448274983dd259fbf"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-150x150.jpg","fcb0763850c665dc8f0daad182e90793"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-300x169.jpg","9363fbb2873fb284167868ba64601d3d"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-768x432.jpg","660e23116fcbc5d55e1fa2162e3e973d"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-825x510.jpg","ce590b8a14b9eddbd0a3dd0886eedd90"],["c:/website/public/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080.jpg","a60dd02d0d87732b43ada6d5e40b94ba"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1-150x150.png","ed3a64c6d8f2aaabcf91e7d37483f214"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1-169x300.png","7c6a72975e1d529aea5612d5e4b60991"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1-576x1024.png","3798cc1c8ee5334d8c27d4630d78f20a"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1.png","cec221c1875eb7c950ea81dbd2572ad4"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-150x150.png","ed3a64c6d8f2aaabcf91e7d37483f214"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-169x300.png","7c6a72975e1d529aea5612d5e4b60991"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-576x1024.png","3798cc1c8ee5334d8c27d4630d78f20a"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-720x510.png","69cbf856a505196930ca5fc2d522cfc4"],["c:/website/public/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09.png","cec221c1875eb7c950ea81dbd2572ad4"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-1-150x150.jpg","39e79e4751ad5abce0a8b17502ca135c"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-1-300x300.jpg","90941d9d4a81dee76e057e3c29b083d1"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-1.jpg","2f3f2131bb0affaa81af3a17ae20ff0c"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-150x150.jpg","39e79e4751ad5abce0a8b17502ca135c"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-300x300.jpg","90941d9d4a81dee76e057e3c29b083d1"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-640x510.jpg","56752f67f67e06b5f3c9495268e1bfb7"],["c:/website/public/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2.jpg","2f3f2131bb0affaa81af3a17ae20ff0c"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-1-150x150.jpg","d417068a33009a708072974979f39c7d"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-1-300x199.jpg","977ee4ada363f466e36d205ce83d4766"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-1-768x510.jpg","a05b46211415845db94763f93802249b"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-1.jpg","423a547b7e8b132538c6d25545cab464"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-150x150.jpg","d417068a33009a708072974979f39c7d"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-300x199.jpg","977ee4ada363f466e36d205ce83d4766"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-768x510.jpg","a05b46211415845db94763f93802249b"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720-825x510.jpg","a3786cc714abf2d18b352cb489550c9a"],["c:/website/public/wp-content/uploads/2019/09/android-994910_60_720.jpg","423a547b7e8b132538c6d25545cab464"],["c:/website/public/wp-content/uploads/2019/09/cat-1-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["c:/website/public/wp-content/uploads/2019/09/cat-1-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["c:/website/public/wp-content/uploads/2019/09/cat-1.jpg","043d04c45f93708262c10b2f23c26ee2"],["c:/website/public/wp-content/uploads/2019/09/cat-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["c:/website/public/wp-content/uploads/2019/09/cat-1992140_640-1-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["c:/website/public/wp-content/uploads/2019/09/cat-1992140_640-1-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["c:/website/public/wp-content/uploads/2019/09/cat-1992140_640-1.jpg","043d04c45f93708262c10b2f23c26ee2"],["c:/website/public/wp-content/uploads/2019/09/cat-1992140_640-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["c:/website/public/wp-content/uploads/2019/09/cat-1992140_640-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["c:/website/public/wp-content/uploads/2019/09/cat-1992140_640.jpg","043d04c45f93708262c10b2f23c26ee2"],["c:/website/public/wp-content/uploads/2019/09/cat-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["c:/website/public/wp-content/uploads/2019/09/cat.jpg","043d04c45f93708262c10b2f23c26ee2"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-1024x640.jpg","2f98e33e61c578ee945c44d993f7f205"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-150x150.jpg","432b45791a9e92e4fdf2e7a115c96c2a"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-1536x960.jpg","22cc6cfe6e7fe6b046b2b40746a4e964"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-1568x980.jpg","e4b59cef29e06a075b6fafbca9615612"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-300x188.jpg","1807137e846158c4c51029c93b58f771"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-768x480.jpg","b62eae80e509fbeff2620f4d0153f3d3"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1.jpg","02c6114bc7353a45d92322264721894d"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1024x640.jpg","2f98e33e61c578ee945c44d993f7f205"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-150x150.jpg","432b45791a9e92e4fdf2e7a115c96c2a"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-300x188.jpg","1807137e846158c4c51029c93b58f771"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-768x480.jpg","b62eae80e509fbeff2620f4d0153f3d3"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-825x510.jpg","90de468798e35b5bab950c2775676649"],["c:/website/public/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217.jpg","02c6114bc7353a45d92322264721894d"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759-1-150x150.jpg","c513030750a261cbcae4f07f57b4e4df"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759-1-300x300.jpg","0a47c4e1d1557740eb495a84cc265609"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759-1.jpg","b3e4ae7d3b2fdd36dac90416ad5f331d"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759-150x150.jpg","c513030750a261cbcae4f07f57b4e4df"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759-300x300.jpg","0a47c4e1d1557740eb495a84cc265609"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759-512x510.jpg","a8699417110c3b6cb0f4f88abfe362fc"],["c:/website/public/wp-content/uploads/2019/09/mmqrcode1531110256759.jpg","b3e4ae7d3b2fdd36dac90416ad5f331d"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1-1024x576.jpg","7f09f93d5337034af3f780dd24075d95"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1-150x150.jpg","693ecbf92e9ec433e4d7e2b725603e03"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1-1536x864.jpg","1e7a2c856271aee3bdea1ca640118852"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1-1568x882.jpg","e39449f185cc2e53e8ea94517a395daa"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1-300x169.jpg","b10679051d3b2e045e5d525c0b64b9d6"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1-768x432.jpg","8bea7e34a4d389a8b632cacab26ac600"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1.jpg","2e668455a469811144a8b267bb283a41"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-1024x576.jpg","7f09f93d5337034af3f780dd24075d95"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-150x150.jpg","693ecbf92e9ec433e4d7e2b725603e03"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-300x169.jpg","b10679051d3b2e045e5d525c0b64b9d6"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-768x432.jpg","8bea7e34a4d389a8b632cacab26ac600"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920-825x510.jpg","b24b9989e0584427a0411cc94071e465"],["c:/website/public/wp-content/uploads/2019/09/safety-2659095_1920.jpg","2e668455a469811144a8b267bb283a41"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1-1024x576.png","42fc07295d139e92f7a01bcc19b67d8e"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1-150x150.png","0e9f81ccc90e53519ad9629cead7f833"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1-1536x864.png","021e29113ccd2ef30da67a62f1674f04"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1-1568x882.png","a94a385a09d9a3109ee08565467a8f05"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1-300x169.png","23b935bc800505495eca45668740d0bc"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1-768x432.png","b2682c38d8631cbd104f5767f8a41a4f"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-1.png","e05e252d5797ae1d2ad22c7d385ae588"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-150x150.png","d212e47cb7193203eb18de6488c3e85c"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file-300x111.png","600773b6d65c336c65a53376a60c1a0d"],["c:/website/public/wp-content/uploads/2019/09/unnamed-file.png","e898007b0c78bc21ffc1b2029c9c8c97"],["c:/website/public/wp-content/uploads/2019/09/截图-1024x576.png","42fc07295d139e92f7a01bcc19b67d8e"],["c:/website/public/wp-content/uploads/2019/09/截图-150x150.png","0e9f81ccc90e53519ad9629cead7f833"],["c:/website/public/wp-content/uploads/2019/09/截图-300x169.png","23b935bc800505495eca45668740d0bc"],["c:/website/public/wp-content/uploads/2019/09/截图-768x432.png","b2682c38d8631cbd104f5767f8a41a4f"],["c:/website/public/wp-content/uploads/2019/09/截图-825x510.png","c4dc3db9047e919311b2317731dbe01c"],["c:/website/public/wp-content/uploads/2019/09/截图.png","e05e252d5797ae1d2ad22c7d385ae588"],["c:/website/public/wp-content/uploads/2019/09/捕获-150x150.png","d212e47cb7193203eb18de6488c3e85c"],["c:/website/public/wp-content/uploads/2019/09/捕获-300x111.png","600773b6d65c336c65a53376a60c1a0d"],["c:/website/public/wp-content/uploads/2019/09/捕获.png","e898007b0c78bc21ffc1b2029c9c8c97"],["c:/website/public/wp-content/uploads/2019/09/捕获154154-150x150.png","0a1acb20895dcfa0a40e945a26bb108e"],["c:/website/public/wp-content/uploads/2019/09/捕获154154-300x257.png","bee680e9683b03feb44217987d91bad8"],["c:/website/public/wp-content/uploads/2019/09/捕获154154-739x510.png","05c3a7990f80fecb7be69608ea1e45f3"],["c:/website/public/wp-content/uploads/2019/09/捕获154154.png","6b2088002748845b9c6efdd7eb5cfcaf"],["c:/website/public/wp-content/uploads/2019/09/捕获544554-150x150.png","55b1ccb4075bbc58e3839704e95c2d35"],["c:/website/public/wp-content/uploads/2019/09/捕获544554-300x257.png","0c8bb83e5d09ffc52500dd0fdd3adac3"],["c:/website/public/wp-content/uploads/2019/09/捕获544554-739x510.png","05c3a7990f80fecb7be69608ea1e45f3"],["c:/website/public/wp-content/uploads/2019/09/捕获544554.png","b8c2cdeb632d0b1458612ba3bfbde41f"],["c:/website/public/wp-content/uploads/2019/09/捕获5555-150x150.png","8a31c4ff31d1e1fece257ffea614a747"],["c:/website/public/wp-content/uploads/2019/09/捕获5555-300x257.png","1e973c6480443403bac7bd05e31fc687"],["c:/website/public/wp-content/uploads/2019/09/捕获5555-739x510.png","277d086004246805892c66ff45ac209c"],["c:/website/public/wp-content/uploads/2019/09/捕获5555.png","b012f9e288cb19ebbf349865c6514160"],["c:/website/public/wp-content/uploads/2019/09/新建文件夹/20170812090225.jpg","af0e1d4f8d4485b3ca1e9eef3761c421"],["c:/website/public/wp-content/uploads/2019/09/新建文件夹/截图.png","e05e252d5797ae1d2ad22c7d385ae588"],["c:/website/public/wp-content/uploads/2019/09/新建文件夹/捕获154154.png","6b2088002748845b9c6efdd7eb5cfcaf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







