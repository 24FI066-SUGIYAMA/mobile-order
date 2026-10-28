const menuItems = [
  {
    id: "demi",
    name: "デミグラスハンバーグ",
    category: "recommended",
    groups: ["recommended", "grand"],
    price: 1980,
    image: "./assets/generated-demi-hamburg.png",
    badge: "人気 No.1",
    description: "じっくり煮込んだ特製デミグラスソースのハンバーグ。",
  },
  {
    id: "omelet",
    name: "とろ〜りチーズのオムライス",
    category: "recommended",
    groups: ["recommended", "grand"],
    price: 1680,
    image: "./assets/generated-cheese-omelet.png",
    badge: "人気 No.2",
    description: "ふわとろ卵とチーズのコクをお楽しみください。",
  },
  {
    id: "salad",
    name: "海老とアボカドのサラダボウル",
    category: "recommended",
    groups: ["recommended", "side"],
    price: 1480,
    image: "./assets/generated-shrimp-salad.png",
    badge: "ヘルシー",
    description: "プリプリの海老とアボカドの相性抜群サラダ。",
  },
  {
    id: "roast",
    name: "ローストビーフプレート",
    category: "seasonal",
    groups: ["seasonal", "grand"],
    price: 2480,
    image: "./assets/generated-roast-beef.png",
    badge: "シェフのおすすめ",
    description: "特製ソースで仕上げた贅沢なローストビーフ。",
  },
  {
    id: "pasta",
    name: "釜揚げしらすのペペロンチーノ",
    category: "seasonal",
    groups: ["seasonal", "grand"],
    price: 1580,
    image: "./assets/generated-peperoncino.png",
    badge: "季節限定",
    description: "しらすの旨みたっぷりの季節限定パスタ。",
  },
  {
    id: "steak",
    name: "サーロインステーキ御膳",
    category: "grand",
    groups: ["grand"],
    price: 3280,
    image: "./assets/generated-sirloin-steak-set.png",
    badge: "満足セット",
    description: "香ばしく焼き上げたステーキとライスの御膳。",
  },
  {
    id: "potato",
    name: "トリュフ香るフライドポテト",
    category: "side",
    groups: ["side"],
    price: 780,
    image: "./assets/generated-truffle-fries.png",
    description: "揚げたてポテトにトリュフ塩を合わせた定番サイド。",
  },
  {
    id: "soup",
    name: "北海道コーンポタージュ",
    category: "side",
    groups: ["side"],
    price: 720,
    image: "./assets/generated-corn-potage.png",
    description: "甘みのあるコーンをなめらかに仕立てたスープ。",
  },
  {
    id: "chocolat",
    name: "濃厚ガトーショコラ",
    category: "dessert",
    groups: ["recommended", "dessert"],
    price: 880,
    image: "./assets/generated-gateau-chocolat.png",
    description: "カカオの香り豊かな濃厚ガトーショコラ。",
  },
  {
    id: "pudding",
    name: "自家製カスタードプリン",
    category: "dessert",
    groups: ["dessert"],
    price: 820,
    image: "./assets/generated-custard-pudding.png",
    badge: "数量限定",
    description: "卵のコクを生かした、なめらかな自家製プリン。",
  },
  {
    id: "oolong",
    name: "ウーロン茶（ICE）",
    category: "drink",
    groups: ["drink"],
    price: 520,
    image: "./assets/generated-iced-oolong-tea.png",
    description: "食事に合うすっきりした冷たいウーロン茶。",
  },
  {
    id: "lemonade",
    name: "瀬戸内レモンスカッシュ",
    category: "drink",
    groups: ["drink"],
    price: 680,
    image: "./assets/generated-lemon-squash.png",
    badge: "爽やか",
    description: "レモンの酸味と炭酸が広がる冷たいドリンク。",
  },
  {
    id: "teriyaki",
    name: "照り焼きチキンプレート",
    category: "grand",
    groups: ["recommended", "grand"],
    price: 1880,
    image: "./assets/generated-teriyaki-chicken.png",
    badge: "おすすめ",
    description: "香ばしい照り焼きチキンをたっぷり盛り付けました。",
  },
  {
    id: "carbonara",
    name: "濃厚カルボナーラ",
    category: "grand",
    groups: ["recommended", "grand"],
    price: 1680,
    image: "./assets/generated-carbonara.png",
    description: "卵とチーズで仕上げたクリーミーなパスタ。",
  },
  {
    id: "gratin",
    name: "海老のクリームグラタン",
    category: "seasonal",
    groups: ["recommended", "seasonal"],
    price: 1780,
    image: "./assets/generated-shrimp-gratin.png",
    badge: "季節限定",
    description: "海老と濃厚なホワイトソースの熱々グラタン。",
  },
  {
    id: "chicken",
    name: "若鶏の香草グリル",
    category: "grand",
    groups: ["recommended", "grand"],
    price: 2180,
    image: "./assets/generated-herb-chicken.png",
    badge: "シェフ推奨",
    description: "香草をまとわせ、皮目を香ばしく焼き上げました。",
  },
  {
    id: "garlic-bread",
    name: "焼きたてガーリックトースト",
    category: "side",
    groups: ["recommended", "side"],
    price: 680,
    image: "./assets/generated-garlic-toast.png",
    description: "バターとガーリックが香る焼きたてトースト。",
  },
  {
    id: "berry-parfait",
    name: "ベリーミックスパフェ",
    category: "dessert",
    groups: ["recommended", "dessert"],
    price: 980,
    image: "./assets/generated-berry-parfait.png",
    badge: "新登場",
    description: "甘酸っぱいベリーとアイスを重ねたパフェ。",
  },
];

const categories = [
  { id: "recommended", label: "おすすめ", icon: "star" },
  { id: "grand", label: "グランドメニュー", icon: "plate" },
  { id: "seasonal", label: "季節限定", icon: "leaf" },
  { id: "side", label: "サイドメニュー", icon: "bowl" },
  { id: "drink", label: "ドリンク", icon: "cup" },
  { id: "dessert", label: "デザート", icon: "cake" },
];

const cart = new Map();

const orderHistory = [];

let currentCategory = "recommended";
let messageTimer = null;
let menuAnimationTimer = null;
let partySize = 1;
let optionItem = null;
let optionSelections = {};

const grandOptionItemIds = menuItems.filter((item) => item.groups.includes("grand")).map((item) => item.id);

const optionGroups = [
  {
    id: "rice",
    label: "ご飯の量",
    defaultId: "regular",
    itemIds: grandOptionItemIds,
    options: [
      { id: "regular", label: "普通", price: 0 },
      { id: "small", label: "少なめ", price: -80 },
      { id: "large", label: "大盛", price: 180 },
    ],
  },
  {
    id: "size",
    label: "サイズ",
    defaultId: "regular",
    itemIds: grandOptionItemIds,
    options: [
      { id: "regular", label: "レギュラー", price: 0 },
      { id: "large", label: "ラージ", price: 480 },
      { id: "small", label: "スモール", price: -260 },
    ],
  },
  {
    id: "set",
    label: "セット",
    defaultId: "none",
    itemIds: grandOptionItemIds,
    options: [
      { id: "none", label: "単品", price: 0 },
      { id: "drink", label: "ドリンク付き", price: 420 },
      { id: "soup", label: "スープ付き", price: 480 },
    ],
  },
];

const app = document.querySelector("#app");

const designSize = {
  width: 1060,
  height: 883,
};

function numberFontHtml(value) {
  return String(value).replace(/[0-9０-９]+/g, '<span class="numberFont">$&</span>');
}

function setNumberHtml(element, value) {
  element.innerHTML = numberFontHtml(value);
}

function formatPriceHtml(value) {
  return numberFontHtml(formatPrice(value));
}

app.innerHTML = `
  <div class="stage">
    <div class="tabletFrame">
      <div class="appShell">
        <aside class="sideBar">
          <div class="brand">
            <div class="brandName">GOOD EATS</div>
            <div class="brandSub">TASTY &amp; CO.</div>
          </div>

          <nav class="sideNav" aria-label="メニューカテゴリ"></nav>
          <button class="historyButton" type="button">
            ${icon("receipt")}
            <span>注文履歴</span>
          </button>
        </aside>

        <main class="menuArea">
          <div class="message" role="status" aria-live="polite"></div>

          <section class="menuSection">
            <h1 class="sectionTitle"></h1>
            <div class="menuGrid"></div>
          </section>
        </main>

        <aside class="orderPanel" aria-label="注文リスト">
          <header class="orderHeader">
            <h2>注文リスト</h2>
            <p class="orderParty">${numberFontHtml("1名様")}</p>
          </header>

          <div class="orderList"></div>

          <footer class="orderFooter">
            <div class="costRows">
              <div><span>小計 <em class="itemCount">${numberFontHtml("(0点)")}</em></span><strong class="subtotal">${numberFontHtml("¥0")}</strong></div>
              <div><span>${numberFontHtml("サービス料（10%）")}</span><strong class="serviceFee">${numberFontHtml("¥0")}</strong></div>
              <hr />
              <div class="totalRow"><span>合計</span><strong><span class="total">${numberFontHtml("¥0")}</span><small>（税込）</small></strong></div>
            </div>
            <button class="checkoutButton" type="button">
              <span>注文へ進む</span>
              <span class="arrow">→</span>
            </button>
          </footer>
        </aside>
      </div>

      <div class="entryFlow" role="dialog" aria-modal="true" aria-label="来店受付">
        <section class="entryScreen titleScreen isActive" data-entry-screen="title">
          <div class="entryBrand">
            <span>GOOD EATS</span>
            <small>TASTY &amp; CO.</small>
          </div>
          <div class="entryHero">
            <p>いらっしゃいませ</p>
            <h1>ご注文を開始します</h1>
          </div>
          <button class="startOrderButton" type="button">はじめる</button>
        </section>

        <section class="entryScreen partyScreen" data-entry-screen="party">
          <button class="backTitleButton" type="button">戻る</button>
          <div class="entryBrand">
            <span>GOOD EATS</span>
            <small>TASTY &amp; CO.</small>
          </div>
          <div class="partyPanel">
            <h1>来店人数</h1>
            <p>ご利用人数を選択してください</p>
            <div class="partyCounter" aria-label="来店人数">
              <button type="button" data-party-change="decrease">−</button>
              <strong class="partyCount">${numberFontHtml("1")}</strong>
              <button type="button" data-party-change="increase">＋</button>
            </div>
            <div class="partyQuick">
              <button type="button" data-party-size="1" class="isActive">${numberFontHtml("1名")}</button>
              <button type="button" data-party-size="2">${numberFontHtml("2名")}</button>
              <button type="button" data-party-size="3">${numberFontHtml("3名")}</button>
              <button type="button" data-party-size="4">${numberFontHtml("4名")}</button>
              <button type="button" data-party-size="5">${numberFontHtml("5名")}</button>
              <button type="button" data-party-size="6">${numberFontHtml("6名")}</button>
            </div>
            <button class="toMenuButton" type="button">メニューを選ぶ</button>
          </div>
        </section>
      </div>
    </div>

    <div class="optionBackdrop" role="dialog" aria-modal="true" aria-labelledby="optionTitle">
      <div class="optionModal">
        <button class="optionCloseButton" type="button" aria-label="閉じる">×</button>
        <div class="optionHero">
          <img class="optionImage" src="" alt="" />
          <div>
            <p class="optionEyebrow">商品の内容を選択</p>
            <h2 id="optionTitle" class="optionName"></h2>
            <p class="optionDescription"></p>
          </div>
        </div>
        <div class="optionGroups"></div>
        <div class="optionFooter">
          <div>
            <span>合計</span>
            <strong class="optionTotal">${numberFontHtml("¥0")}</strong>
          </div>
          <button class="optionAddButton" type="button">注文リストに追加</button>
        </div>
      </div>
    </div>

    <div class="completeBackdrop" role="dialog" aria-modal="true" aria-labelledby="completeTitle">
      <div class="completeModal">
        <div class="completeMark">✓</div>
        <h2 id="completeTitle">注文を受け付けました</h2>
        <p>料理ができ次第、お席までお持ちします。</p>
        <div class="completeSummary">
          <span class="completeCount">${numberFontHtml("0点")}</span>
          <strong class="completeTotal">${numberFontHtml("¥0")}</strong>
        </div>
        <div class="completeItems" aria-label="注文した商品"></div>
        <button class="completeCloseButton" type="button">閉じる</button>
      </div>
    </div>

    <div class="historyBackdrop" role="dialog" aria-modal="true" aria-labelledby="historyTitle">
      <div class="historyModal">
        <h2 id="historyTitle">注文履歴</h2>
        <div class="historyOrders"></div>
        <button class="historyCloseButton" type="button">閉じる</button>
      </div>
    </div>
  </div>
`;

const sideNav = document.querySelector(".sideNav");
const sectionTitle = document.querySelector(".sectionTitle");
const menuGrid = document.querySelector(".menuGrid");
const orderList = document.querySelector(".orderList");
const orderParty = document.querySelector(".orderParty");
const subtotal = document.querySelector(".subtotal");
const serviceFee = document.querySelector(".serviceFee");
const total = document.querySelector(".total");
const itemCount = document.querySelector(".itemCount");
const message = document.querySelector(".message");
const completeBackdrop = document.querySelector(".completeBackdrop");
const completeCount = document.querySelector(".completeCount");
const completeTotal = document.querySelector(".completeTotal");
const completeItems = document.querySelector(".completeItems");
const historyBackdrop = document.querySelector(".historyBackdrop");
const historyOrders = document.querySelector(".historyOrders");
const entryFlow = document.querySelector(".entryFlow");
const entryScreens = document.querySelectorAll(".entryScreen");
const partyCount = document.querySelector(".partyCount");
const partyQuickButtons = document.querySelectorAll("[data-party-size]");
const optionBackdrop = document.querySelector(".optionBackdrop");
const optionImage = document.querySelector(".optionImage");
const optionName = document.querySelector(".optionName");
const optionDescription = document.querySelector(".optionDescription");
const optionGroupsEl = document.querySelector(".optionGroups");
const optionTotal = document.querySelector(".optionTotal");

function syncAppScale() {
  const nextScale = window.innerWidth / designSize.width;
  document.documentElement.style.setProperty("--app-scale", nextScale.toString());
}

function setEntryScreen(screenName) {
  entryScreens.forEach((screen) => {
    screen.classList.toggle("isActive", screen.dataset.entryScreen === screenName);
  });
}

function updatePartySize(nextSize) {
  partySize = Math.min(12, Math.max(1, nextSize));
  setNumberHtml(partyCount, partySize);
  setNumberHtml(orderParty, `${partySize}名様`);
  partyQuickButtons.forEach((button) => {
    button.classList.toggle("isActive", Number(button.dataset.partySize) === partySize);
  });
}

function icon(name) {
  const paths = {
    star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9L12 3Z"/>',
    plate: '<path d="M5 16a7 7 0 0 1 14 0M3 16h18M4 19h16M12 7v2"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    leaf: '<path d="M20 4C11 4 5 9 5 17c8 0 14-5 15-13Z"/><path d="M5 17c4-5 8-7 15-13"/>',
    bowl: '<path d="M4 10h16c-.5 6-3.5 9-8 9s-7.5-3-8-9Z"/><path d="M7 7c1-2 3-3 5-3s4 1 5 3"/>',
    cup: '<path d="M7 5h10l-1 15H8L7 5Z"/><path d="M9 8h6M17 8h2c1.5 0 2 1 2 2s-.5 2-2 2h-2"/>',
    cake: '<path d="M5 12h14v8H5v-8Z"/><path d="M7 12c1-4 9-4 10 0M8 8V5M12 8V5M16 8V5"/>',
    globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8"/>',
    search: '<circle cx="10" cy="10" r="5.5"/><path d="m14.5 14.5 4 4"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  };

  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
}

function formatPrice(value) {
  return `¥${value.toLocaleString("ja-JP")}`;
}

function getOptionById(groupId, optionId) {
  const group = optionGroups.find((entry) => entry.id === groupId);
  return group.options.find((entry) => entry.id === optionId);
}

function getItemOptionGroups(item) {
  return optionGroups.filter((group) => group.itemIds.includes(item.id));
}

function getDefaultSelections(item) {
  return Object.fromEntries(getItemOptionGroups(item).map((group) => [group.id, group.defaultId]));
}

function getOptionSummary(item, selections) {
  return getItemOptionGroups(item)
    .map((group) => getOptionById(group.id, selections[group.id]).label)
    .join(" / ");
}

function getOptionPrice(item, selections) {
  return getItemOptionGroups(item).reduce((sum, group) => {
    return sum + getOptionById(group.id, selections[group.id]).price;
  }, 0);
}

function getLineKey(item, selections) {
  const optionKey = getItemOptionGroups(item).map((group) => selections[group.id]).join("__");
  return [item.id, optionKey].filter(Boolean).join("__");
}

function getCartEntries() {
  return [...cart.values()].filter((entry) => entry.item && entry.quantity > 0);
}

function getItemCartQuantity(itemId) {
  return getCartEntries()
    .filter((entry) => entry.item.id === itemId)
    .reduce((sum, entry) => sum + entry.quantity, 0);
}

function getCartCount() {
  return getCartEntries().reduce((sum, entry) => sum + entry.quantity, 0);
}

function getSubtotal() {
  return getCartEntries().reduce((sum, entry) => sum + entry.unitPrice * entry.quantity, 0);
}

function getServiceFee() {
  return Math.round(getSubtotal() * 0.1);
}

function getTotal() {
  return getSubtotal() + getServiceFee();
}

function showMessage(text) {
  message.textContent = text;
  if (messageTimer) {
    window.clearTimeout(messageTimer);
  }
  messageTimer = window.setTimeout(() => {
    message.textContent = "";
  }, 2400);
}

function setQuantity(key, nextQuantity) {
  if (nextQuantity <= 0) {
    cart.delete(key);
  } else {
    const entry = cart.get(key);
    if (entry) {
      entry.quantity = nextQuantity;
    }
  }
  renderMenu();
  renderOrder();
}

function addConfiguredItem(item, selections) {
  const lineSelections = { ...getDefaultSelections(item), ...selections };
  const key = getLineKey(item, lineSelections);
  const existing = cart.get(key);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.set(key, {
      key,
      item,
      selections: lineSelections,
      optionSummary: getOptionSummary(item, lineSelections),
      unitPrice: item.price + getOptionPrice(item, lineSelections),
      quantity: 1,
    });
  }
  renderMenu();
  renderOrder();
}

function getVisibleItems() {
  return menuItems.filter((item) => item.groups.includes(currentCategory));
}

function renderSideNav() {
  sideNav.innerHTML = categories
    .map(
      (category) => `
        <button class="navItem${category.id === currentCategory ? " isActive" : ""}" type="button" data-category="${category.id}">
          ${icon(category.icon)}
          <span>${category.label}</span>
        </button>
      `,
    )
    .join("");
}

function renderMenu() {
  const visibleItems = getVisibleItems();
  const category = categories.find((entry) => entry.id === currentCategory);
  sectionTitle.textContent = category.id === "recommended" ? "おすすめメニュー" : `${category.label}`;

  if (visibleItems.length === 0) {
    menuGrid.innerHTML = `<p class="emptyMenu">該当するメニューがありません。</p>`;
    return;
  }

  menuGrid.innerHTML = visibleItems
    .map((item) => {
      const quantity = getItemCartQuantity(item.id);
      return `
        <article class="menuCard">
          <div class="imageWrap">
            <img src="${item.image}" alt="${item.name}" />
            ${item.badge ? `<span class="menuBadge">${numberFontHtml(item.badge)}</span>` : ""}
          </div>
          <div class="cardBody">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="cardFooter">
              <span><strong>${formatPriceHtml(item.price)}</strong><small>（税込）</small></span>
              <button class="addButton" type="button" data-menu-id="${item.id}" aria-label="${item.name}を追加">＋</button>
            </div>
            <div class="cardQuantity${quantity > 0 ? "" : " isEmpty"}">${numberFontHtml(quantity > 0 ? `${quantity}点 注文中` : "0点 注文中")}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function animateMenuCards() {
  if (menuAnimationTimer) {
    window.clearTimeout(menuAnimationTimer);
  }

  menuGrid.classList.remove("isFloating");
  void menuGrid.offsetWidth;
  menuGrid.classList.add("isFloating");

  menuAnimationTimer = window.setTimeout(() => {
    menuGrid.classList.remove("isFloating");
  }, 1120);
}

function renderOrder() {
  const entries = getCartEntries();
  const subtotalValue = getSubtotal();
  const serviceValue = getServiceFee();
  const totalValue = getTotal();

  setNumberHtml(itemCount, `(${getCartCount()}点)`);
  setNumberHtml(subtotal, formatPrice(subtotalValue));
  setNumberHtml(serviceFee, formatPrice(serviceValue));
  setNumberHtml(total, formatPrice(totalValue));

  if (entries.length === 0) {
    orderList.innerHTML = `<p class="emptyOrder">メニューを選ぶと<br>注文リストに追加されます</p>`;
    return;
  }

  orderList.innerHTML = entries
    .map(
      ({ key, item, optionSummary, quantity, unitPrice }) => `
        <article class="orderItem">
          <img src="${item.image}" alt="${item.name}" />
          <div class="orderItemBody">
            <h3>${item.name}</h3>
            <p>${formatPriceHtml(unitPrice)} <small>（税込）</small></p>
            ${optionSummary ? `<div class="orderOptions">${optionSummary}</div>` : ""}
            <div class="quantityControl" aria-label="${item.name}の注文数">
              <button type="button" data-action="decrease" data-key="${key}" aria-label="${item.name}を減らす">−</button>
              <span>${numberFontHtml(quantity)}</span>
              <button type="button" data-action="increase" data-key="${key}" aria-label="${item.name}を増やす">＋</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderOrderHistory() {
  if (orderHistory.length === 0) {
    historyOrders.innerHTML = `<p class="emptyHistory">確定した注文はまだありません。</p>`;
    return;
  }

  const combinedEntries = new Map();
  let combinedCount = 0;
  let combinedTotal = 0;

  orderHistory.forEach((order) => {
    combinedCount += order.count;
    combinedTotal += order.total;
    order.entries.forEach((entry) => {
      const existing = combinedEntries.get(entry.key);
      if (existing) {
        existing.quantity += entry.quantity;
      } else {
        combinedEntries.set(entry.key, { ...entry });
      }
    });
  });

  historyOrders.innerHTML = `
    <section class="historyOrder">
      <header>
        <strong>お会計合計</strong>
        <span>${numberFontHtml(`${combinedCount}点・${formatPrice(combinedTotal)}`)}</span>
      </header>
      ${Array.from(combinedEntries.values())
        .map(
          ({ item, optionSummary, quantity }) => `
            <div class="historyItem">
              <span>${item.name}${optionSummary ? `<small>${optionSummary}</small>` : ""}</span>
              <strong>${numberFontHtml(`${quantity}点`)}</strong>
            </div>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderOptionModal() {
  if (!optionItem) {
    return;
  }

  optionImage.src = optionItem.image;
  optionImage.alt = optionItem.name;
  optionName.textContent = optionItem.name;
  optionDescription.textContent = optionItem.description;
  optionGroupsEl.innerHTML = getItemOptionGroups(optionItem)
    .map(
      (group) => `
        <section class="optionGroup">
          <h3>${group.label}</h3>
          <div class="optionChoices">
            ${group.options
              .map(
                (option) => `
                  <button class="${optionSelections[group.id] === option.id ? "isActive" : ""}" type="button" data-option-group="${group.id}" data-option-id="${option.id}">
                    <span>${option.label}</span>
                    <small>${numberFontHtml(option.price === 0 ? "追加なし" : `${option.price > 0 ? "+" : "-"}${formatPrice(Math.abs(option.price))}`)}</small>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
  setNumberHtml(optionTotal, formatPrice(optionItem.price + getOptionPrice(optionItem, optionSelections)));
}

function openOptionModal(itemId) {
  optionItem = menuItems.find((item) => item.id === itemId);
  if (!optionItem) {
    return;
  }

  optionSelections = getDefaultSelections(optionItem);
  if (getItemOptionGroups(optionItem).length === 0) {
    addConfiguredItem(optionItem, optionSelections);
    showMessage(`${optionItem.name}を注文リストに追加しました。`);
    optionItem = null;
    return;
  }

  renderOptionModal();
  optionBackdrop.classList.add("isOpen");
}

function closeOptionModal() {
  optionBackdrop.classList.remove("isOpen");
  optionItem = null;
}

function handleMenuOptionClick(event) {
  const button = event.target.closest("[data-menu-id]");
  if (!button) {
    return;
  }

  openOptionModal(button.dataset.menuId);
}

function handleOrderQuantityClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const key = button.dataset.key;
  const entry = cart.get(key);
  if (!entry) {
    return;
  }

  const quantity = entry.quantity;
  const nextQuantity = button.dataset.action === "decrease" ? quantity - 1 : quantity + 1;
  setQuantity(key, nextQuantity);
}

sideNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  currentCategory = button.dataset.category;
  renderSideNav();
  renderMenu();
  animateMenuCards();
});

menuGrid.addEventListener("click", handleMenuOptionClick);

orderList.addEventListener("click", handleOrderQuantityClick);

optionGroupsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option-group]");
  if (!button) {
    return;
  }

  optionSelections[button.dataset.optionGroup] = button.dataset.optionId;
  renderOptionModal();
});

document.querySelector(".optionAddButton").addEventListener("click", () => {
  if (!optionItem) {
    return;
  }

  addConfiguredItem(optionItem, optionSelections);
  showMessage(`${optionItem.name}を注文リストに追加しました。`);
  closeOptionModal();
});

document.querySelector(".optionCloseButton").addEventListener("click", closeOptionModal);

optionBackdrop.addEventListener("click", (event) => {
  if (event.target === optionBackdrop) {
    closeOptionModal();
  }
});

document.querySelector(".startOrderButton").addEventListener("click", () => {
  setEntryScreen("party");
});

document.querySelector(".backTitleButton").addEventListener("click", () => {
  setEntryScreen("title");
});

document.querySelector(".partyCounter").addEventListener("click", (event) => {
  const button = event.target.closest("[data-party-change]");
  if (!button) {
    return;
  }

  const direction = button.dataset.partyChange === "decrease" ? -1 : 1;
  updatePartySize(partySize + direction);
});

partyQuickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updatePartySize(Number(button.dataset.partySize));
  });
});

document.querySelector(".toMenuButton").addEventListener("click", () => {
  entryFlow.classList.add("isClosed");
  window.requestAnimationFrame(animateMenuCards);
});

document.querySelector(".checkoutButton").addEventListener("click", () => {
  const confirmedEntries = getCartEntries();
  const confirmedCount = getCartCount();
  const confirmedTotal = getTotal();

  if (confirmedCount === 0) {
    showMessage("メニューを選んでから注文へ進んでください。");
    return;
  }

  setNumberHtml(completeCount, `${confirmedCount}点`);
  setNumberHtml(completeTotal, formatPrice(confirmedTotal));
  completeItems.innerHTML = confirmedEntries
    .map(
      ({ item, optionSummary, quantity, unitPrice }) => `
        <div class="completeItem">
          <span>${item.name}${optionSummary ? `<small>${optionSummary}</small>` : ""}</span>
          <small>${numberFontHtml(`${quantity}点`)}</small>
          <strong>${formatPriceHtml(unitPrice * quantity)}</strong>
        </div>
      `,
    )
    .join("");
  completeBackdrop.classList.add("isOpen");

  orderHistory.unshift({
    entries: confirmedEntries.map((entry) => ({ ...entry })),
    count: confirmedCount,
    total: confirmedTotal,
  });
  cart.clear();
  renderMenu();
  renderOrder();
});

document.querySelector(".historyButton").addEventListener("click", () => {
  renderOrderHistory();
  historyBackdrop.classList.add("isOpen");
});

document.querySelector(".historyCloseButton").addEventListener("click", () => {
  historyBackdrop.classList.remove("isOpen");
});

historyBackdrop.addEventListener("click", (event) => {
  if (event.target === historyBackdrop) {
    historyBackdrop.classList.remove("isOpen");
  }
});

document.querySelector(".completeCloseButton").addEventListener("click", () => {
  completeBackdrop.classList.remove("isOpen");
});

completeBackdrop.addEventListener("click", (event) => {
  if (event.target === completeBackdrop) {
    completeBackdrop.classList.remove("isOpen");
  }
});

window.addEventListener("resize", syncAppScale);

syncAppScale();
renderSideNav();
renderMenu();
renderOrder();
