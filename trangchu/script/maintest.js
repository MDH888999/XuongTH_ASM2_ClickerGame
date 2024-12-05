// Danh sách vật phẩm
const items = [
    {
        name: 'Nô lệ Hiếu Bùi',
        type: 'nole',
        img: 'nole/nft01.avif',
        gia: 10,
        increment: 1,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'Gậy đánh chó',
        type: 'tool',
        img: 'nole/nft02.jpg',
        gia: 10,
        increment: 1,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'Nô lệ Trung Bùi',
        type: 'nole',
        img: 'nole/nft03.avif',
        gia: 500,
        increment: 10,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'Búa gõ đầu',
        type: 'tool',
        img: 'nole/nft04.jpg',
        gia: 100,
        increment: 10,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'Nô lệ Vinh đần',
        type: 'nole',
        img: 'nole/nft05.jpg',
        gia: 5000,
        increment: 100,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'Kiếm cùn',
        type: 'tool',
        img: 'nole/nft06.jpg',
        gia: 1000,
        increment: 100,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'Nô lệ Huy',
        type: 'nole',
        img: 'nole/nft07.jpg',
        gia: 50000,
        increment: 1000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'Rìu cứu hỏa',
        type: 'tool',
        img: 'nole/nft08.avif',
        gia: 10000,
        increment: 1000,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'Nô lệ Khoa',
        type: 'nole',
        img: 'nole/nft09.jpg',
        gia: 500000,
        increment: 10000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'Lightsaber',
        type: 'tool',
        img: 'nole/nft10.jpg',
        gia: 100000,
        increment: 10000,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'Nô lệ Hào',
        type: 'nole',
        img: 'nole/nft11.jpg',
        gia: 5000000,
        increment: 100000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'Kiếm thánh Excalibur',
        type: 'tool',
        img: 'nole/nft12.jpg',
        gia: 1000000,
        increment: 100000,
        unit: 'Tiền mỗi click',
        quantity: 0
    }
];

const rareitems = [
    {
        name: 'Thánh dược Elixir',
        type: 'elixir',
        img: 'tools/exilir.png',
        increment: 2,
        unit: 'Tiền mỗi giây',
        percent: 50,
        quantity: 0
    },
    {
        name: 'Thiên thạch',
        type: 'grindstone',
        img: 'tools/damai.png',
        increment: 2,
        unit: 'Tiền mỗi click',
        percent: 50,
        quantity: 0
    }
];
let hasElixir = false; // Kiểm tra nếu Elixir đã có trong rương
let hasGrindstone = false; // Kiểm tra nếu Grindstone đã có trong rương
let money = 500;
let mpsMultiplier = 1;
let mpcMultiplier = 1;
let moneyPerClick = 1 * mpcMultiplier;
let moneyPerSecond = 0;

// Render các vật phẩm
function renderItems() {
    const container = document.getElementById('itemsContainer'); // Lấy container chính

    items.forEach((item, index) => {
        const itemHTML = document.createElement('div'); // Tạo một phần tử div mới
        itemHTML.classList.add('vatpham'); // Thêm class vatpham

        itemHTML.innerHTML = `
        <div>
            <img src="${item.img}" class="anhvp" alt="${item.name}">
            <div class="buyButton">
                <button onclick="buyItem(${index})" class="buyButton">Mua</button>
            </div>
        </div>
        <div class="Text">
            <p id="soluong${item.type}${index}">${item.name}: 0</p>
            <p id="gia${item.type}${index}">Giá: ${item.gia} VNĐ</p>
            <p>+${item.increment} ${item.unit}!</p>
        </div>
    `;

        container.appendChild(itemHTML); // Thêm phần tử vào container
    });
}
function renderRareItems() {
    const container = document.getElementById('rareitemsContainer'); // Lấy container chính

    rareitems.forEach((rareitem, index) => {
        const itemHTML = document.createElement('div'); // Tạo một phần tử div mới
        itemHTML.classList.add('vatpham'); // Thêm class vatpham

        itemHTML.innerHTML = `
        <div>
            <img src="${rareitem.img}" class="anhvp" alt="${rareitem.name}">
        </div>
        <div class="Text">
            <p id="soluong${rareitem.type}${index}">${rareitem.name}: 0</p>
                        <p>x${rareitem.increment} ${rareitem.unit}!</p>
        </div>
    `;

        container.appendChild(itemHTML); // Thêm phần tử vào container
    });
}
// Mua vật phẩm
function buyItem(index) {
    const item = items[index];
    if (money >= item.gia) {
        money -= item.gia;
        item.quantity += 1;
        item.gia = Math.floor(item.gia * 1.5); // Tăng giá sau mỗi lần mua
        if (item.type === 'nole') moneyPerSecond += item.increment;
        if (item.type === 'tool') moneyPerClick += item.increment;

        // Cập nhật giao diện
        document.getElementById(
            `soluong${item.type}${index}`
        ).textContent = `${item.name}: ${item.quantity}`;
        document.getElementById(
            `gia${item.type}${index}`
        ).textContent = `Giá: ${item.gia} VNĐ`;
        updateDisplay();
    } else {
        alert('Không đủ tiền!');
    }
}

// Mở rương
function openChest() {
    // Kiểm tra nếu người chơi có đủ tiền và cả 2 vật phẩm chưa có
    if (money >= 500) {
        // Giả sử mỗi lần mở rương tốn 500 VNĐ
        if (hasElixir && hasGrindstone) {
            alert('Rương đã chứa đủ vật phẩm, không thể mở nữa!');
            return; // Nếu cả 2 vật phẩm đã có, không thể mở rương
        }

        money -= 500; // Trừ tiền khi mở rương
        updateDisplay(); // Cập nhật giao diện

        // Chọn ngẫu nhiên vật phẩm, nhưng nếu đã có 1 vật phẩm, chỉ ra vật phẩm còn lại
        const selectedItem = getRandomItem();

        // Cập nhật trạng thái vật phẩm đã có trong rương
        if (selectedItem.name === 'Thánh dược Elixir') {
            hasElixir = true;
            rareitems[0].quantity += 1;
            document.getElementById(
                `soluongelixir0`
            ).textContent = `Thánh dược Elixir: ${rareitems[0].quantity}`;
        } else if (selectedItem.name === 'Thiên thạch') {
            hasGrindstone = true;
            rareitems[1].quantity += 1;
            document.getElementById(
                `soluonggrindstone1`
            ).textContent = `Thiên thạch: ${rareitems[1].quantity}`;
        }

        // Cập nhật kết quả vật phẩm nhận được
        alert(`Bạn nhận được: ${selectedItem.name}`);

        // Áp dụng tác dụng vật phẩm
        applyItemEffect(selectedItem);

        updateDisplay(); // Cập nhật lại giao diện
    } else {
        alert('Không đủ tiền để mở rương!');
    }
}

//Hàm random item
function getRandomItem() {
    // Nếu đã có Elixir, chỉ chọn Thiên thạch
    if (hasElixir) {
        return rareitems.find((item) => item.name === 'Thiên thạch');
    }
    // Nếu đã có Thiên thạch, chỉ chọn Elixir
    else if (hasGrindstone) {
        return rareitems.find((item) => item.name === 'Thánh dược Elixir');
    }
    // Nếu chưa có vật phẩm nào, chọn ngẫu nhiên với tỉ lệ 50% cho mỗi vật phẩm
    else {
        const random = Math.random();
        if (random < 0.5) {
            return rareitems.find((item) => item.name === 'Thánh dược Elixir');
        } else {
            return rareitems.find((item) => item.name === 'Thiên thạch');
        }
    }
}

// Hàm áp dụng tác dụng của vật phẩm
function applyItemEffect(selectedItem) {
    if (selectedItem.type === 'elixir') {
        mpsMultiplier = mpsMultiplier * 2;
    } else if (selectedItem.type === 'grindstone') {
        mpcMultiplier = mpcMultiplier * 2;
    }
}

// Click để nhận tiền
document.getElementById('clickMeButton').addEventListener('click', () => {
    money += moneyPerClick * mpcMultiplier;
    updateDisplay();
});

// Tăng tiền mỗi giây
setInterval(() => {
    money += moneyPerSecond * mpsMultiplier;
    updateDisplay();
}, 1000);

// Cập nhật hiển thị
function updateDisplay() {
    document.getElementById('money').textContent = `Tiền: ${money} VNĐ`;
    document.getElementById('mpc').textContent = `Tiền mỗi click: ${
        moneyPerClick * mpcMultiplier
    }`;
    document.getElementById('mps').textContent = `Tiền mỗi giây: ${
        moneyPerSecond * mpsMultiplier
    }`;
}

// Khởi tạo
renderItems();
renderRareItems();
updateDisplay();
