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

var precacheConfig = [["/112/index.html","c414be72d71e4a5c9661ee8f88e3ee26"],["/118/index.html","c72714f161117746fa2b9a5c6ca14640"],["/125/index.html","f3a73d6d2bbf46339b89614732f842c7"],["/165/index.html","7bc9049b7852f5daf515bb929dda69f9"],["/291/index.html","1b788887663eb277b76a0351675c7da7"],["/321/index.html","0e1a053aef4dce3b7bd05b2bef153152"],["/344/index.html","81e29dbac8e61a2aa05d61e820e0a84f"],["/35/index.html","813959b743b36e5d7ea1bd7a256d64f7"],["/355/index.html","adda0e5b5d7e063f0e00964a32c7cc8d"],["/404.html","bfd270327dc034761799540b70b7e30d"],["/44-2/index.html","7cb0c66e885fbb2d41dfc010947ef46a"],["/63/index.html","ffec39698bfed8f2d033958c38b91d59"],["/71/index.html","8b4593c2522da1608f7928ba14184307"],["/86/index.html","aa10a6fdbdc931deb6f08507071d47b1"],["/about/index.html","b0ce017d8c2703a6ca384d704914899e"],["/archives/2017/07/index.html","04668ba5a485f4f57da6c12c766b568e"],["/archives/2017/08/index.html","40b19a2a0da8457b004fe922832b379b"],["/archives/2017/11/index.html","1497447d6e4426a59527de22c370bf33"],["/archives/2017/index.html","e2976ac0aca66c406477219dc4f27e48"],["/archives/2018/01/index.html","11ba1f83da6d60b58d0288b0d42d592e"],["/archives/2018/06/index.html","a5d7e9387c19d5459339262d7f4eb644"],["/archives/2018/07/index.html","abbc550c604b71d34c1de6ac086cba36"],["/archives/2018/index.html","34b4d8989672a6d9eeaff6702d162fc3"],["/archives/2019/08/index.html","5210ab714e06f1030292291b7fa64434"],["/archives/2019/index.html","5210ab714e06f1030292291b7fa64434"],["/archives/2020/02/index.html","2acb11f62bc03b66de3d07a136448fc9"],["/archives/2020/03/index.html","7f496202f157c54da389d47de362d610"],["/archives/2020/04/index.html","b70926ad33d44a8c5f8c71ade36dad2e"],["/archives/2020/index.html","7265cc7f31aff74142783bbcd49d58e7"],["/archives/index.html","e508eb84d49af25374b1a301caa43823"],["/archives/page/2/index.html","07b2a86e05b0806f11c39d1e99c540c0"],["/categories/IT/index.html","1121b21645923704e312553927e247d7"],["/categories/IT/生活/index.html","8c6487243d23a15ae3f39cca646c03c8"],["/categories/index.html","bb4bb8b0a7c5d3937ea4e68899b58ecd"],["/categories/生活/index.html","f1352fef39e43ae88e1c7ca3d96019e2"],["/css/black.css","0e49ad979f2c788566803f18cf47dc28"],["/css/main.css","4c929d0f64b03ca3eb9ef6d46acc604a"],["/e5-85-b3-e4-ba-8e/index.html","32a95d194c15fa25727305ad3722fed9"],["/e7-95-99-e8-a8-80-e6-9d-bf/index.html","3aef2fcc93579a50750542e2357e7d26"],["/images/icons/icon-128x128.png","df215efe01ada367dd8ac91dfc3f25bb"],["/images/icons/icon-144x144.png","4031b4997018e8120a78de60a100181f"],["/images/icons/icon-152x152.png","bc66a2a4a347d13642a4d227147e73e1"],["/images/icons/icon-192x192.png","d9ec1baebb6f07be1957c0434b7bab32"],["/images/icons/icon-384x384.png","ed67afa4002e8562cdf3cd83faff43d2"],["/images/icons/icon-512x512.png","4d89f11d6bb44f388ba36735bc45bc32"],["/images/icons/icon-72x72.png","87e371c06efeca9134c19ec3ae55d796"],["/images/icons/icon-96x96.png","ccc89381594a8c86ebd0424b6972a22c"],["/img/apple-touch-icon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/apple.jpg","4fdac1b2ccfbff08b42304eb0b7ac5c9"],["/img/avatar.jpg","da8cdfada62e70ce451c53bdebc0376d"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/bill_gates.jpg","623576f0c64b21c9b36fbeb247532469"],["/img/default.jpg","92c41908e31356a10f59ed5e0f10e148"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/favicon.png","c3afd11c7efe6ce1f6c525fc4a9f29d0"],["/img/favicon1.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/ics11.png","c40fdb9598d80dead69a02114f74f323"],["/img/ics12.png","1bf691baec0bc3689ef819d59e542b61"],["/img/ics13.png","0c08ff700efd7df971f8d7e7bf7c0729"],["/img/ics2345.png","b35d683a22196cedcd0018fdac828a56"],["/img/ics678.png","ebe236a3977c83d76ddf39b8263ffcfd"],["/img/ics910.png","a0a1a59bc71578a856b9ba6fd0dca149"],["/img/landscape.jpg","fd292a8a4843edc49166ae2a1b5e674f"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/snow-mountain.jpg","937cb8523a8ad1abf1d35bd042c2330d"],["/img/ssl.jpg","2e668455a469811144a8b267bb283a41"],["/index.html","9b91a10a97f06be49e79ede779c68c67"],["/js/lazyload.js","deaf6034caf451aba4fa944ff0ace5a9"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/lib/prettify/github-v2.min.css","7e0f0e29f43c395a37af8560b1362285"],["/lib/prettify/tomorrow-night-eighties.min.css","5999a3c1bf9481a6becd57fda4363418"],["/lib/prettify/tomorrow-night.min.css","4ae1cca7f04218d26c0d1f99c931c4cf"],["/lib/prettify/tomorrow.min.css","7a3fed42c8fc5d2772544f339bd504ab"],["/links/index.html","0d667d6a74854151c851cda4c8035690"],["/local-search.xml","b73ebb6f6a5f4293f184264ece4b43b7"],["/manifest.json","65a9c2d37da805311faf00a44920c3a8"],["/page/2/index.html","5d9fbd0bfd47bd83b667835f201ef8c6"],["/sample-page-2/index.html","1e5a9746d9b706c49a4dc62895a91721"],["/sample-page/index.html","c8f6ee2f7af7e6647ebebe6f7f1ecd1a"],["/tags/APP/index.html","1549eb46c964ec21932b167257420eb1"],["/tags/Andriod/index.html","06aa2b048144e776d8f657e84eb8a6f0"],["/tags/Chrome/index.html","a04a5f0a598f1f52e8773bc9ec18d051"],["/tags/Firefox/index.html","be657049e9a679503e39ca3b52f4744c"],["/tags/Hexo/index.html","b418e82244fab847d19f1572118b3fe5"],["/tags/SSL/index.html","17d23f96a6643485a24ba7cfb2e28532"],["/tags/WordPress/index.html","ac9b71b4e17631f3d8e08f3abaf3ec20"],["/tags/index.html","7ba1c8075fac1c0b86788dea0e795750"],["/tags/浏览器/index.html","58290070309dbc0a6799193b8d76ee33"],["/tags/随感/index.html","3a52f1ebd6223c904a987c8e6ccbb546"],["/wp-content/uploads/2017/08/1666982_L-1024x585.png","b4642736deee567198e96d8679d28741"],["/wp-content/uploads/2017/08/1666982_L-150x150.png","0759427a01fd9f3078f05a46d991af70"],["/wp-content/uploads/2017/08/1666982_L-1536x877.png","123074927469559cba2cb9010e6e8b35"],["/wp-content/uploads/2017/08/1666982_L-300x171.png","4c106a6e37f76b7442567fe1ea082bb3"],["/wp-content/uploads/2017/08/1666982_L-768x438.png","6717e032b5c87bd726a20bc9b6819845"],["/wp-content/uploads/2017/08/1666982_L.png","6863358bdd981386c376fdcf6ba2fc44"],["/wp-content/uploads/2017/08/20170315235642_a05342144ed8ed1f83cfa414ec6c3c47_1-150x150.jpeg","d81ea9228e8386a8680b0bb0caa42b4a"],["/wp-content/uploads/2017/08/20170315235642_a05342144ed8ed1f83cfa414ec6c3c47_1-300x187.jpeg","aa259630de557c326c9be62394035136"],["/wp-content/uploads/2017/08/20170315235642_a05342144ed8ed1f83cfa414ec6c3c47_1.jpeg","8bf53240001a6163d674080b80366de5"],["/wp-content/uploads/2017/08/2181896_L-1024x683.jpg","912e2fda0e37c769c73d7ccec566010b"],["/wp-content/uploads/2017/08/2181896_L-150x150.jpg","04011270aebcdad34db38684c1478eba"],["/wp-content/uploads/2017/08/2181896_L-300x200.jpg","b5fbca7a46e8a988ecb38a9ceaead258"],["/wp-content/uploads/2017/08/2181896_L-750x500.jpg","8764d15941ad3cf8f606b5cc6dfe40fc"],["/wp-content/uploads/2017/08/2181896_L-768x512.jpg","1f5e90f0991a35122108a886d300e8d5"],["/wp-content/uploads/2017/08/2181896_L.jpg","6931175fee1ca3c79774700dc66dac5c"],["/wp-content/uploads/2017/08/32132获-150x150.png","f0898d47e21114f3b4be4b468f59d016"],["/wp-content/uploads/2017/08/32132获-300x257.png","cd1c4ce38ab54ee1c5436e5b9719390a"],["/wp-content/uploads/2017/08/32132获.png","20601a84824cf0ea26a03a0eb70dd2ad"],["/wp-content/uploads/2017/08/500450829-1024x576.jpg","5a143a2752a820e881c62d2c66c5c5c1"],["/wp-content/uploads/2017/08/500450829-150x150.jpg","1254a368941e3a3c436b259a55431571"],["/wp-content/uploads/2017/08/500450829-300x169.jpg","dcd52199e40138f978d16468bd8d701d"],["/wp-content/uploads/2017/08/500450829-750x422.jpg","c881e8f80d005f7d28c0b508eeb1334e"],["/wp-content/uploads/2017/08/500450829-768x432.jpg","12564184931909586ee3a709551abfcf"],["/wp-content/uploads/2017/08/500450829.jpg","c069414b2a3b0a98f801fc455f3b7d88"],["/wp-content/uploads/2017/08/55555获-150x150.png","2c803a2be0db3e7f17d7890a380e19d5"],["/wp-content/uploads/2017/08/55555获-300x257.png","36ea8aaf81901156a6cb45d038ec9d82"],["/wp-content/uploads/2017/08/55555获.png","cc676c6a0d7c5c1c8150eef28542c9f6"],["/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09-150x150.png","ed3a64c6d8f2aaabcf91e7d37483f214"],["/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09-169x300.png","7c6a72975e1d529aea5612d5e4b60991"],["/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09-576x1024.png","3798cc1c8ee5334d8c27d4630d78f20a"],["/wp-content/uploads/2017/08/Screenshot_2017-08-10-22-09-09.png","cec221c1875eb7c950ea81dbd2572ad4"],["/wp-content/uploads/2017/08/android-994910_60_720-150x150.jpg","d417068a33009a708072974979f39c7d"],["/wp-content/uploads/2017/08/android-994910_60_720-300x199.jpg","977ee4ada363f466e36d205ce83d4766"],["/wp-content/uploads/2017/08/android-994910_60_720-750x498.jpg","5d4fea7179a781469cdcdc6a9b298338"],["/wp-content/uploads/2017/08/android-994910_60_720-768x510.jpg","a05b46211415845db94763f93802249b"],["/wp-content/uploads/2017/08/android-994910_60_720.jpg","423a547b7e8b132538c6d25545cab464"],["/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-1024x640.jpg","2f98e33e61c578ee945c44d993f7f205"],["/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-150x150.jpg","432b45791a9e92e4fdf2e7a115c96c2a"],["/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-300x188.jpg","1807137e846158c4c51029c93b58f771"],["/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-750x469.jpg","66cf3317264c4973b365ae179916a3b4"],["/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217-768x480.jpg","b62eae80e509fbeff2620f4d0153f3d3"],["/wp-content/uploads/2017/08/ec5f41e37cf7c1b2a697a26f10ff7217.jpg","02c6114bc7353a45d92322264721894d"],["/wp-content/uploads/2017/08/ghjklgfhjklhjk-150x150.jpg","a668ff57353daa9acd2137c362261bd0"],["/wp-content/uploads/2017/08/ghjklgfhjklhjk-300x195.jpg","51a922fc1825a217bee8b93b9c26bf8c"],["/wp-content/uploads/2017/08/ghjklgfhjklhjk.jpg","62f4a252a13d09a94efdfdde7553952a"],["/wp-content/uploads/2017/08/safety-2659095_1920-1024x576.jpg","7f09f93d5337034af3f780dd24075d95"],["/wp-content/uploads/2017/08/safety-2659095_1920-150x150.jpg","693ecbf92e9ec433e4d7e2b725603e03"],["/wp-content/uploads/2017/08/safety-2659095_1920-300x169.jpg","b10679051d3b2e045e5d525c0b64b9d6"],["/wp-content/uploads/2017/08/safety-2659095_1920-750x422.jpg","f0b9e9f3ff3ed09cf441b9eca3b5fe83"],["/wp-content/uploads/2017/08/safety-2659095_1920-768x432.jpg","8bea7e34a4d389a8b632cacab26ac600"],["/wp-content/uploads/2017/08/safety-2659095_1920.jpg","2e668455a469811144a8b267bb283a41"],["/wp-content/uploads/2017/08/截图-1024x576.png","42fc07295d139e92f7a01bcc19b67d8e"],["/wp-content/uploads/2017/08/截图-150x150.png","0e9f81ccc90e53519ad9629cead7f833"],["/wp-content/uploads/2017/08/截图-300x169.png","23b935bc800505495eca45668740d0bc"],["/wp-content/uploads/2017/08/截图-750x422.png","3463a869cd948ac19ab857e689eee30a"],["/wp-content/uploads/2017/08/截图-768x432.png","b2682c38d8631cbd104f5767f8a41a4f"],["/wp-content/uploads/2017/08/截图.png","e05e252d5797ae1d2ad22c7d385ae588"],["/wp-content/uploads/2017/08/捕获-150x150.png","d212e47cb7193203eb18de6488c3e85c"],["/wp-content/uploads/2017/08/捕获-300x111.png","600773b6d65c336c65a53376a60c1a0d"],["/wp-content/uploads/2017/08/捕获.png","e898007b0c78bc21ffc1b2029c9c8c97"],["/wp-content/uploads/2017/08/捕获154154-150x150.png","0a1acb20895dcfa0a40e945a26bb108e"],["/wp-content/uploads/2017/08/捕获154154-300x257.png","bee680e9683b03feb44217987d91bad8"],["/wp-content/uploads/2017/08/捕获154154.png","6b2088002748845b9c6efdd7eb5cfcaf"],["/wp-content/uploads/2017/08/捕获544554-150x150.png","55b1ccb4075bbc58e3839704e95c2d35"],["/wp-content/uploads/2017/08/捕获544554-300x257.png","0c8bb83e5d09ffc52500dd0fdd3adac3"],["/wp-content/uploads/2017/08/捕获544554.png","b8c2cdeb632d0b1458612ba3bfbde41f"],["/wp-content/uploads/2017/08/捕获5555-150x150.png","8a31c4ff31d1e1fece257ffea614a747"],["/wp-content/uploads/2017/08/捕获5555-300x257.png","1e973c6480443403bac7bd05e31fc687"],["/wp-content/uploads/2017/08/捕获5555.png","b012f9e288cb19ebbf349865c6514160"],["/wp-content/uploads/2018/09/screenshot.png","e898007b0c78bc21ffc1b2029c9c8c97"],["/wp-content/uploads/2019/08/1.png","9e4eb4c3deb00d67b2c059f453179a28"],["/wp-content/uploads/2019/08/112.png","63f2eceb90193e3d3da7999181245ce4"],["/wp-content/uploads/2019/08/2019-08-31-150721-1024x455.jpg","ec50e1002ff476380be9f873520ac5fb"],["/wp-content/uploads/2019/08/2019-08-31-151535-1024x655.jpg","b0f2a98e8818f08b6d0ecadd2aaaf7c3"],["/wp-content/uploads/2019/08/2019-08-31-152345-1024x651.jpg","1ecb94a113edc311830768f80a2d98b4"],["/wp-content/uploads/2019/08/2019-08-31-152641-1024x568.jpg","ef437b433359ee5b4e04f15c376c2e4a"],["/wp-content/uploads/2019/08/22222-1024x652.png","0dd7b651a054780505ea59ade06f7c08"],["/wp-content/uploads/2019/08/43567865432-1024x416.png","954a4e0d8c5cd16330f5246d45087e2a"],["/wp-content/uploads/2019/08/4655432345676543-1024x648.png","27626e71c28f6ae09044f25f20e14ebd"],["/wp-content/uploads/2019/08/image-1024x552.png","37365f4925960b9cca362f07fbf2ba14"],["/wp-content/uploads/2019/08/image-2-1024x635.png","a3b01faeb35eb4e713ef9f96682f011f"],["/wp-content/uploads/2019/08/image-3-1024x551.png","1c996a32c5f213615af080f24a8dd0e2"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-1-150x150.jpg","8a7aaf62f186c1784712cafe9f8ad208"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-1-300x225.jpg","9fcb5de26eb444743ad917293c063842"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-1-768x576.jpg","3869827445ee7a32e8538af9c7f1e3c8"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-1.jpg","8347e596634cc23f04183d6cdea872b8"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-1024x768.jpg","616de9a1b2b584d2a4de6c9d0fa97f6e"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-150x150.jpg","8a7aaf62f186c1784712cafe9f8ad208"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-300x225.jpg","9fcb5de26eb444743ad917293c063842"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-768x576.jpg","3869827445ee7a32e8538af9c7f1e3c8"],["/wp-content/uploads/2019/09/1052010_XL-1024x768-825x510.jpg","eb61a6600d06219d67cf680bf65aedab"],["/wp-content/uploads/2019/09/1052010_XL-1024x768.jpg","8347e596634cc23f04183d6cdea872b8"],["/wp-content/uploads/2019/09/154154-150x150.png","0a1acb20895dcfa0a40e945a26bb108e"],["/wp-content/uploads/2019/09/154154-300x257.png","bee680e9683b03feb44217987d91bad8"],["/wp-content/uploads/2019/09/154154.png","6b2088002748845b9c6efdd7eb5cfcaf"],["/wp-content/uploads/2019/09/20170729210449-1-1-1024x768.jpg","303480e1e7f7d498988c60f28c9a4ecd"],["/wp-content/uploads/2019/09/20170729210449-1-1-150x150.jpg","09b8d9556d8e99af88de0bcc2809be35"],["/wp-content/uploads/2019/09/20170729210449-1-1-1536x1152.jpg","8d6dcb6fd8869e0ac6b47daaa1813190"],["/wp-content/uploads/2019/09/20170729210449-1-1-1568x1176.jpg","2ee6d677f887091fdf7cf12f558269c9"],["/wp-content/uploads/2019/09/20170729210449-1-1-2048x1536.jpg","aec2b06f4e33509e384ac9a94579cbef"],["/wp-content/uploads/2019/09/20170729210449-1-1-300x225.jpg","52d313c0103df46ddff7d99973bca729"],["/wp-content/uploads/2019/09/20170729210449-1-1-768x576.jpg","366f17a2bd1bd2cead5ba5f3f667db55"],["/wp-content/uploads/2019/09/20170729210449-1-1-scaled.jpg","0f08758e55e06f52c621aa83ed5c95ae"],["/wp-content/uploads/2019/09/20170729210449-1-1.jpg","bd8c8946c86b6c1db5fb8a6fc396c235"],["/wp-content/uploads/2019/09/20170729210449-1-1024x768.jpg","303480e1e7f7d498988c60f28c9a4ecd"],["/wp-content/uploads/2019/09/20170729210449-1-150x150.jpg","09b8d9556d8e99af88de0bcc2809be35"],["/wp-content/uploads/2019/09/20170729210449-1-300x225.jpg","52d313c0103df46ddff7d99973bca729"],["/wp-content/uploads/2019/09/20170729210449-1-768x576.jpg","366f17a2bd1bd2cead5ba5f3f667db55"],["/wp-content/uploads/2019/09/20170729210449-1-825x510.jpg","1b5503cd80709c45ac8c3d39471ad9f6"],["/wp-content/uploads/2019/09/20170729210449-1.jpg","bd8c8946c86b6c1db5fb8a6fc396c235"],["/wp-content/uploads/2019/09/20170812090225.jpg","af0e1d4f8d4485b3ca1e9eef3761c421"],["/wp-content/uploads/2019/09/32132鑾_150x150.png","f0898d47e21114f3b4be4b468f59d016"],["/wp-content/uploads/2019/09/32132鑾_300x257.png","cd1c4ce38ab54ee1c5436e5b9719390a"],["/wp-content/uploads/2019/09/32132鑾_739x510.png","7c4188d5c73f41aa0ac1333f49bbfd2e"],["/wp-content/uploads/2019/09/544554-150x150.png","55b1ccb4075bbc58e3839704e95c2d35"],["/wp-content/uploads/2019/09/544554-300x257.png","0c8bb83e5d09ffc52500dd0fdd3adac3"],["/wp-content/uploads/2019/09/544554.png","b8c2cdeb632d0b1458612ba3bfbde41f"],["/wp-content/uploads/2019/09/5555-150x150.png","8a31c4ff31d1e1fece257ffea614a747"],["/wp-content/uploads/2019/09/5555-300x257.png","1e973c6480443403bac7bd05e31fc687"],["/wp-content/uploads/2019/09/5555.png","b012f9e288cb19ebbf349865c6514160"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-150x150.jpeg","9f9fd41a1f95676316c2ecb5bfe2c575"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-225x300.jpeg","49538d49715735799b6c349ffe7240e0"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-768x1024.jpeg","d0edea01d933f1bf9247abf31493e3c4"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-825x510.jpeg","287ad6fd3fd600f0680f4bf1b571fb42"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-1024x768.jpeg","74a84086702ffc98a143e06814101eb7"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-150x150.jpeg","28cb1ec90288a70c51f94b16d126cca2"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-1536x1152.jpeg","163fc4988d124eac1d18387fd231f56e"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-1568x1176.jpeg","2de61b4228ea23004d2de1ab22c80ee6"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-2048x1536.jpeg","453f37b66378269287dbda85f0955961"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-300x225.jpeg","76510c86258abff9e688ac0cfcd01f67"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-768x576.jpeg","ae63b1af1aa3188b54619544b0e051b3"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1-scaled.jpeg","26a4c870ec788526719f05a3ed4177ea"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1.jpeg","8823703636959358c2a2a845701145b0"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-1024x768.jpeg","470c8ce186aced38e00f52963a6b2312"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-150x150.jpeg","96fe25e302aaca115076d7c86abd483d"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-300x225.jpeg","4bc9acb51aa56b2e7d54663e86f1bed5"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-768x576.jpeg","434453a177fe50b1875adc61567ccd3b"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994-825x510.jpeg","b6edaa0798ba5a1fc905a6643c3e139d"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02-e1536552179994.jpeg","8823703636959358c2a2a845701145b0"],["/wp-content/uploads/2019/09/IMG_20180625_230150-02.jpeg","6edff68db744e58ca86ae8290c0f2e09"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-1024x576.jpg","603b0d5f0d6b51d448274983dd259fbf"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-150x150.jpg","fcb0763850c665dc8f0daad182e90793"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-1536x864.jpg","9a4895d2150e58ee79e9d76d78e3f0c0"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-1568x882.jpg","9e3eca6f16857da0f66bb3699b32ec95"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-300x169.jpg","9363fbb2873fb284167868ba64601d3d"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1-768x432.jpg","660e23116fcbc5d55e1fa2162e3e973d"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1.jpg","a60dd02d0d87732b43ada6d5e40b94ba"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-1024x576.jpg","603b0d5f0d6b51d448274983dd259fbf"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-150x150.jpg","fcb0763850c665dc8f0daad182e90793"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-300x169.jpg","9363fbb2873fb284167868ba64601d3d"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-768x432.jpg","660e23116fcbc5d55e1fa2162e3e973d"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080-825x510.jpg","ce590b8a14b9eddbd0a3dd0886eedd90"],["/wp-content/uploads/2019/09/NordketteNYE_EN-AU12870487032_1920x1080.jpg","a60dd02d0d87732b43ada6d5e40b94ba"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1-150x150.png","ed3a64c6d8f2aaabcf91e7d37483f214"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1-169x300.png","7c6a72975e1d529aea5612d5e4b60991"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1-576x1024.png","3798cc1c8ee5334d8c27d4630d78f20a"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-1.png","cec221c1875eb7c950ea81dbd2572ad4"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-150x150.png","ed3a64c6d8f2aaabcf91e7d37483f214"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-169x300.png","7c6a72975e1d529aea5612d5e4b60991"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-576x1024.png","3798cc1c8ee5334d8c27d4630d78f20a"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09-720x510.png","69cbf856a505196930ca5fc2d522cfc4"],["/wp-content/uploads/2019/09/Screenshot_2017-08-10-22-09-09.png","cec221c1875eb7c950ea81dbd2572ad4"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-1-150x150.jpg","39e79e4751ad5abce0a8b17502ca135c"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-1-300x300.jpg","90941d9d4a81dee76e057e3c29b083d1"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-1.jpg","2f3f2131bb0affaa81af3a17ae20ff0c"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-150x150.jpg","39e79e4751ad5abce0a8b17502ca135c"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-300x300.jpg","90941d9d4a81dee76e057e3c29b083d1"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2-640x510.jpg","56752f67f67e06b5f3c9495268e1bfb7"],["/wp-content/uploads/2019/09/a70e25bf-f576-416a-afc8-9eae96845eab-2.jpg","2f3f2131bb0affaa81af3a17ae20ff0c"],["/wp-content/uploads/2019/09/android-994910_60_720-1-150x150.jpg","d417068a33009a708072974979f39c7d"],["/wp-content/uploads/2019/09/android-994910_60_720-1-300x199.jpg","977ee4ada363f466e36d205ce83d4766"],["/wp-content/uploads/2019/09/android-994910_60_720-1-768x510.jpg","a05b46211415845db94763f93802249b"],["/wp-content/uploads/2019/09/android-994910_60_720-1.jpg","423a547b7e8b132538c6d25545cab464"],["/wp-content/uploads/2019/09/android-994910_60_720-150x150.jpg","d417068a33009a708072974979f39c7d"],["/wp-content/uploads/2019/09/android-994910_60_720-300x199.jpg","977ee4ada363f466e36d205ce83d4766"],["/wp-content/uploads/2019/09/android-994910_60_720-768x510.jpg","a05b46211415845db94763f93802249b"],["/wp-content/uploads/2019/09/android-994910_60_720-825x510.jpg","a3786cc714abf2d18b352cb489550c9a"],["/wp-content/uploads/2019/09/android-994910_60_720.jpg","423a547b7e8b132538c6d25545cab464"],["/wp-content/uploads/2019/09/cat-1-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["/wp-content/uploads/2019/09/cat-1-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["/wp-content/uploads/2019/09/cat-1.jpg","043d04c45f93708262c10b2f23c26ee2"],["/wp-content/uploads/2019/09/cat-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["/wp-content/uploads/2019/09/cat-1992140_640-1-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["/wp-content/uploads/2019/09/cat-1992140_640-1-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["/wp-content/uploads/2019/09/cat-1992140_640-1.jpg","043d04c45f93708262c10b2f23c26ee2"],["/wp-content/uploads/2019/09/cat-1992140_640-150x150.jpg","ce31add0b7edb6dfd3e5ab154143a2a6"],["/wp-content/uploads/2019/09/cat-1992140_640-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["/wp-content/uploads/2019/09/cat-1992140_640.jpg","043d04c45f93708262c10b2f23c26ee2"],["/wp-content/uploads/2019/09/cat-300x183.jpg","4abc3f6a2d84f995269fa67e1ac41a40"],["/wp-content/uploads/2019/09/cat.jpg","043d04c45f93708262c10b2f23c26ee2"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-1024x640.jpg","2f98e33e61c578ee945c44d993f7f205"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-150x150.jpg","432b45791a9e92e4fdf2e7a115c96c2a"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-1536x960.jpg","22cc6cfe6e7fe6b046b2b40746a4e964"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-1568x980.jpg","e4b59cef29e06a075b6fafbca9615612"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-300x188.jpg","1807137e846158c4c51029c93b58f771"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1-768x480.jpg","b62eae80e509fbeff2620f4d0153f3d3"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1.jpg","02c6114bc7353a45d92322264721894d"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-1024x640.jpg","2f98e33e61c578ee945c44d993f7f205"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-150x150.jpg","432b45791a9e92e4fdf2e7a115c96c2a"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-300x188.jpg","1807137e846158c4c51029c93b58f771"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-768x480.jpg","b62eae80e509fbeff2620f4d0153f3d3"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217-825x510.jpg","90de468798e35b5bab950c2775676649"],["/wp-content/uploads/2019/09/ec5f41e37cf7c1b2a697a26f10ff7217.jpg","02c6114bc7353a45d92322264721894d"],["/wp-content/uploads/2019/09/mmqrcode1531110256759-1-150x150.jpg","c513030750a261cbcae4f07f57b4e4df"],["/wp-content/uploads/2019/09/mmqrcode1531110256759-1-300x300.jpg","0a47c4e1d1557740eb495a84cc265609"],["/wp-content/uploads/2019/09/mmqrcode1531110256759-1.jpg","b3e4ae7d3b2fdd36dac90416ad5f331d"],["/wp-content/uploads/2019/09/mmqrcode1531110256759-150x150.jpg","c513030750a261cbcae4f07f57b4e4df"],["/wp-content/uploads/2019/09/mmqrcode1531110256759-300x300.jpg","0a47c4e1d1557740eb495a84cc265609"],["/wp-content/uploads/2019/09/mmqrcode1531110256759-512x510.jpg","a8699417110c3b6cb0f4f88abfe362fc"],["/wp-content/uploads/2019/09/mmqrcode1531110256759.jpg","b3e4ae7d3b2fdd36dac90416ad5f331d"],["/wp-content/uploads/2019/09/safety-2659095_1920-1-1024x576.jpg","7f09f93d5337034af3f780dd24075d95"],["/wp-content/uploads/2019/09/safety-2659095_1920-1-150x150.jpg","693ecbf92e9ec433e4d7e2b725603e03"],["/wp-content/uploads/2019/09/safety-2659095_1920-1-1536x864.jpg","1e7a2c856271aee3bdea1ca640118852"],["/wp-content/uploads/2019/09/safety-2659095_1920-1-1568x882.jpg","e39449f185cc2e53e8ea94517a395daa"],["/wp-content/uploads/2019/09/safety-2659095_1920-1-300x169.jpg","b10679051d3b2e045e5d525c0b64b9d6"],["/wp-content/uploads/2019/09/safety-2659095_1920-1-768x432.jpg","8bea7e34a4d389a8b632cacab26ac600"],["/wp-content/uploads/2019/09/safety-2659095_1920-1.jpg","2e668455a469811144a8b267bb283a41"],["/wp-content/uploads/2019/09/safety-2659095_1920-1024x576.jpg","7f09f93d5337034af3f780dd24075d95"],["/wp-content/uploads/2019/09/safety-2659095_1920-150x150.jpg","693ecbf92e9ec433e4d7e2b725603e03"],["/wp-content/uploads/2019/09/safety-2659095_1920-300x169.jpg","b10679051d3b2e045e5d525c0b64b9d6"],["/wp-content/uploads/2019/09/safety-2659095_1920-768x432.jpg","8bea7e34a4d389a8b632cacab26ac600"],["/wp-content/uploads/2019/09/safety-2659095_1920-825x510.jpg","b24b9989e0584427a0411cc94071e465"],["/wp-content/uploads/2019/09/safety-2659095_1920.jpg","2e668455a469811144a8b267bb283a41"],["/wp-content/uploads/2019/09/unnamed-file-1-1024x576.png","42fc07295d139e92f7a01bcc19b67d8e"],["/wp-content/uploads/2019/09/unnamed-file-1-150x150.png","0e9f81ccc90e53519ad9629cead7f833"],["/wp-content/uploads/2019/09/unnamed-file-1-1536x864.png","021e29113ccd2ef30da67a62f1674f04"],["/wp-content/uploads/2019/09/unnamed-file-1-1568x882.png","a94a385a09d9a3109ee08565467a8f05"],["/wp-content/uploads/2019/09/unnamed-file-1-300x169.png","23b935bc800505495eca45668740d0bc"],["/wp-content/uploads/2019/09/unnamed-file-1-768x432.png","b2682c38d8631cbd104f5767f8a41a4f"],["/wp-content/uploads/2019/09/unnamed-file-1.png","e05e252d5797ae1d2ad22c7d385ae588"],["/wp-content/uploads/2019/09/unnamed-file-150x150.png","d212e47cb7193203eb18de6488c3e85c"],["/wp-content/uploads/2019/09/unnamed-file-300x111.png","600773b6d65c336c65a53376a60c1a0d"],["/wp-content/uploads/2019/09/unnamed-file.png","e898007b0c78bc21ffc1b2029c9c8c97"],["/wp-content/uploads/2019/09/截图-1024x576.png","42fc07295d139e92f7a01bcc19b67d8e"],["/wp-content/uploads/2019/09/截图-150x150.png","0e9f81ccc90e53519ad9629cead7f833"],["/wp-content/uploads/2019/09/截图-300x169.png","23b935bc800505495eca45668740d0bc"],["/wp-content/uploads/2019/09/截图-768x432.png","b2682c38d8631cbd104f5767f8a41a4f"],["/wp-content/uploads/2019/09/截图-825x510.png","c4dc3db9047e919311b2317731dbe01c"],["/wp-content/uploads/2019/09/截图.png","e05e252d5797ae1d2ad22c7d385ae588"],["/wp-content/uploads/2019/09/捕获-150x150.png","d212e47cb7193203eb18de6488c3e85c"],["/wp-content/uploads/2019/09/捕获-300x111.png","600773b6d65c336c65a53376a60c1a0d"],["/wp-content/uploads/2019/09/捕获.png","e898007b0c78bc21ffc1b2029c9c8c97"],["/wp-content/uploads/2019/09/捕获154154-150x150.png","0a1acb20895dcfa0a40e945a26bb108e"],["/wp-content/uploads/2019/09/捕获154154-300x257.png","bee680e9683b03feb44217987d91bad8"],["/wp-content/uploads/2019/09/捕获154154-739x510.png","05c3a7990f80fecb7be69608ea1e45f3"],["/wp-content/uploads/2019/09/捕获154154.png","6b2088002748845b9c6efdd7eb5cfcaf"],["/wp-content/uploads/2019/09/捕获544554-150x150.png","55b1ccb4075bbc58e3839704e95c2d35"],["/wp-content/uploads/2019/09/捕获544554-300x257.png","0c8bb83e5d09ffc52500dd0fdd3adac3"],["/wp-content/uploads/2019/09/捕获544554-739x510.png","05c3a7990f80fecb7be69608ea1e45f3"],["/wp-content/uploads/2019/09/捕获544554.png","b8c2cdeb632d0b1458612ba3bfbde41f"],["/wp-content/uploads/2019/09/捕获5555-150x150.png","8a31c4ff31d1e1fece257ffea614a747"],["/wp-content/uploads/2019/09/捕获5555-300x257.png","1e973c6480443403bac7bd05e31fc687"],["/wp-content/uploads/2019/09/捕获5555-739x510.png","277d086004246805892c66ff45ac209c"],["/wp-content/uploads/2019/09/捕获5555.png","b012f9e288cb19ebbf349865c6514160"],["/wp-content/uploads/2019/09/新建文件夹/20170812090225.jpg","af0e1d4f8d4485b3ca1e9eef3761c421"],["/wp-content/uploads/2019/09/新建文件夹/截图.png","e05e252d5797ae1d2ad22c7d385ae588"],["/wp-content/uploads/2019/09/新建文件夹/捕获154154.png","6b2088002748845b9c6efdd7eb5cfcaf"]];
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


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




