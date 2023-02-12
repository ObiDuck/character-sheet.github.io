'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff68634ded5fef389efe365bd023a48d",
".git/config": "52a94f8cfa816a94f951bfb9ef048f9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "12ba55c5d233a351e5fe1eef1912652e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffa04bdc2ac225238c5ebc6858758a3c",
".git/logs/refs/heads/main": "ffa04bdc2ac225238c5ebc6858758a3c",
".git/logs/refs/remotes/origin/HEAD": "12b80592dbe9872cc7d93f99d14b0d5a",
".git/logs/refs/remotes/origin/main": "67e04e642407b0a6be750f3729b46c68",
".git/objects/14/82b081bf00c1b4d9e1a31a2e54439a9340d365": "50302596ae981124b194c2656d8e8c55",
".git/objects/16/6795b40863824cec21c5475a37a559ca64dee8": "e3401eecbe38d17e09af0b6232df58c3",
".git/objects/25/b8400753f73604064d976699bd6e6b4656e43b": "c0d09d77a91234c8b65206c97d38d59f",
".git/objects/36/59eaedb8a7ea7e8ce24df5beb229f680cd20f4": "bdc491e52aad277ad939e132c9c4c411",
".git/objects/42/3210e4c7a2fb84c98a2a3bd344e0a24383a516": "07522960e59bbf849f3df877750e34c7",
".git/objects/45/85f2acb0391b1700f71123a6af7c02ff0eac8b": "67267c2e4dcfdd97a1d830bff872e858",
".git/objects/6e/1b4bcf533405ff73fb92edece18475c57872c3": "392b89ba11c5d94758dedda4ccfdc1c8",
".git/objects/78/2b701944786508ea2429c303c548c95930e03c": "53c3432b16333a16fa8dd9f0e799b0a1",
".git/objects/88/f96ab359cd83f4697f4474766b0320b4d4c156": "517a9d2869809d34b3add20feff92b98",
".git/objects/95/6b3208253bd080e1fb007808943e9e894e41d3": "42dabede3a9c68793e45ea33ceb4fc78",
".git/objects/99/8619cbbbf73ed45bbbd4fe70f30b386b9007dc": "32cccdb1ca60359595af2286f8c3bcc3",
".git/objects/a3/723fe6c057a0d65602ea8b2bf8659ba6d3ece0": "7eb6ffe80d11174e9a086a38319f900e",
".git/objects/a4/4983854c02e72d261f70a46a648f8734e4353e": "7c57942b1ff0bd48a8ac700df5e3efdc",
".git/objects/b2/63f2d028e077dba5e50843806b5bdc7a1e26a6": "030823dbb7556965b86ca9d3d09beec9",
".git/objects/b5/48e2abad17d8ce3206f8d96eea3f85f323fb1b": "6603dbbcaa63cedb5bbd06161a7565d0",
".git/objects/cb/71641bad3de85944d7c9e2e88674bc65bc5866": "5674be561615f26b1eb5a43cd6e8d0f6",
".git/objects/cc/2594f5d39d472dba44e8451cbc94fef132d2df": "6815fe08b0cf3f03ef81cd88eb751a6d",
".git/objects/d2/7426de08d98bc864e1a0550f07eb1a8fd342ee": "da65a52ce953c729c42b9c49e3a0de6b",
".git/objects/d6/cbc1b16402ce5c685bcb0266e08d683aaebee4": "374c8e40c8f7ae0831de77f7aa479a5d",
".git/objects/df/74160ed905b64ec25c9813c255f27ff1e20d16": "f56a99bb98d3e55f02819d95768fff07",
".git/objects/e1/76a29c2f6d1b0aef7f1204af38721a703c4c7c": "e9260982b359333f3ca78e13eb67cd58",
".git/objects/e8/ed73fd9b4abd8f2e4e9b31771790bcc18cb6c3": "faa420905a854a63a7db518a3588bad3",
".git/objects/f4/433d21e47ebdb342f944b5acd28c72a6239bdd": "0c1874932028c4134015493a71e23b7b",
".git/objects/pack/pack-2c4441edaf8ba4a5cbb197c77e790399c8dbd285.idx": "046ca714c9124904d4243c6f02408cb9",
".git/objects/pack/pack-2c4441edaf8ba4a5cbb197c77e790399c8dbd285.pack": "20dbcb942f839c6633bba275004142ec",
".git/packed-refs": "b344f0a4bb9a273cf784bb8419fb231f",
".git/refs/heads/main": "736595d5c0a69ca8b2df121426b67096",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "736595d5c0a69ca8b2df121426b67096",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
".git/tortoisegit.data": "09777668ff1480f4d914568036f42a0c",
".git/tortoisegit.index": "dabcabaf25f68b9746fe0046f5615abd",
"assets/AssetManifest.json": "6eb5fdd52040e43ecd2a6237aa7bb289",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/Eve.jpg": "d0a7a35613bff546f57ee9de4560037d",
"assets/NOTICES": "ae76f6492055fe2db9ab7a5d79687252",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "b5dcabda2200d6f1b848029c9bfb4904",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "79fd1b5f4b9ed5c1eb55814813698372",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4c503cfbb24a0defc95a1a1d459d4518",
"/": "4c503cfbb24a0defc95a1a1d459d4518",
"main.dart.js": "9b747e2c907a59b767addf444158410a",
"manifest.json": "5d2ccd9e500eb0ec0e2a362d355f12c1",
"README.md": "6cf297f09a8a9ac5798d1bc99d8171ef",
"version.json": "8d804ba8ae85c567496d0a19a01283bd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
