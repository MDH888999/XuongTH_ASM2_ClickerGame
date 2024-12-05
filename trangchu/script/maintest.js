// Danh sách vật phẩm
const items = [
    {
        name: 'NFT 01',
        type: 'nftmps',
        img: 'nftimg/nft01.avif',
        gia: 10,
        increment: 1,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 02',
        type: 'nftmpc',
        img: 'nftimg/nft02.jpg',
        gia: 10,
        increment: 1,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 03',
        type: 'nftmps',
        img: 'nftimg/nft03.jpg',
        gia: 500,
        increment: 10,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 04',
        type: 'nftmpc',
        img: 'nftimg/nft04.avif',
        gia: 100,
        increment: 10,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 05',
        type: 'nftmps',
        img: 'nftimg/nft05.avif',
        gia: 5000,
        increment: 100,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 06',
        type: 'nftmpc',
        img: 'nftimg/nft06.avif',
        gia: 1000,
        increment: 100,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 07',
        type: 'nftmps',
        img: 'nftimg/nft07.avif',
        gia: 50000,
        increment: 1000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 08',
        type: 'nftmpc',
        img: 'nftimg/nft08.avif',
        gia: 10000,
        increment: 1000,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 09',
        type: 'nftmps',
        img: 'nftimg/nft09.avif',
        gia: 500000,
        increment: 10000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 10',
        type: 'nftmpc',
        img: 'nftimg/nft10.avif',
        gia: 100000,
        increment: 10000,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 11',
        type: 'nftmps',
        img: 'nftimg/nft11.avif',
        gia: 5000000,
        increment: 100000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 12',
        type: 'nftmpc',
        img: 'nftimg/nft12.avif',
        gia: 1000000,
        increment: 100000,
        unit: 'Tiền mỗi click',
        quantity: 0
    }
];

const rareitems = [
    {
        name: 'Rare NFT 01',
        type: 'rareNFTmps',
        img: 'nftimg/rarenft01.avif',
        increment: 2,
        unit: 'Tiền mỗi giây',
        percent: 50,
        quantity: 0
    },
    {
        name: 'Rare NFT 02',
        type: 'rareNFTmpc',
        img: 'nftimg/rarenft02.avif',
        increment: 2,
        unit: 'Tiền mỗi click',
        percent: 50,
        quantity: 0
    }
];
let hasRare01 = false; // Kiểm tra nếu rareNFTmps đã có trong rương
let hasRare02 = false; // Kiểm tra nếu rareNFTmpc đã có trong rương
let money = 0;
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
        if (item.type === 'nftmps') moneyPerSecond += item.increment;
        if (item.type === 'nftmpc') moneyPerClick += item.increment;

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
        if (hasRare01 && hasRare02) {
            alert('Rương đã chứa đủ vật phẩm, không thể mở nữa!');
            return; // Nếu cả 2 vật phẩm đã có, không thể mở rương
        }

        money -= 500; // Trừ tiền khi mở rương
        updateDisplay(); // Cập nhật giao diện

        // Chọn ngẫu nhiên vật phẩm, nhưng nếu đã có 1 vật phẩm, chỉ ra vật phẩm còn lại
        const selectedItem = getRandomItem();

        // Cập nhật trạng thái vật phẩm đã có trong rương
        if (selectedItem.name === 'Rare NFT 01') {
            hasRare01 = true;
            rareitems[0].quantity += 1;
            document.getElementById(
                `soluongrareNFTmps0`
            ).textContent = `Rare NFT 01: ${rareitems[0].quantity}`;
        } else if (selectedItem.name === 'Rare NFT 02') {
            hasRare02 = true;
            rareitems[1].quantity += 1;
            document.getElementById(
                `soluongrareNFTmpc1`
            ).textContent = `Rare NFT 02: ${rareitems[1].quantity}`;
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
    // Nếu đã có rareNFTmps, chỉ chọn rareNFT02
    if (hasRare01) {
        return rareitems.find((item) => item.name === 'Rare NFT 02');
    }
    // Nếu đã có rareNFTmpc, chỉ chọn rareNFT01
    else if (hasRare02) {
        return rareitems.find((item) => item.name === 'Rare NFT 01');
    }
    // Nếu chưa có vật phẩm nào, chọn ngẫu nhiên với tỉ lệ 50% cho mỗi vật phẩm
    else {
        const randomValue = Math.random() * 100; // Tạo số ngẫu nhiên từ 0-100
        let cumulativePercent = 0; // Bắt đầu tích lũy tỷ lệ

        for (const item of rareitems) {
            cumulativePercent += item.percent; // Cộng dồn tỷ lệ của vật phẩm
            if (randomValue <= cumulativePercent) {
                return item; // Nếu randomValue nhỏ hơn tỷ lệ tích lũy, chọn vật phẩm
            }
        }
        return null; // Trường hợp không có vật phẩm phù hợp
    }
}

// Hàm áp dụng tác dụng của vật phẩm
function applyItemEffect(selectedItem) {
    if (selectedItem.type === 'rareNFTmps') {
        mpsMultiplier = mpsMultiplier * 2;
    } else if (selectedItem.type === 'rareNFTmpc') {
        mpcMultiplier = mpcMultiplier * 2;
    }
}

//Hàm để xem tỉ lệ của vật phẩm
function chanceView() {
    let message = "Tỉ lệ rơi vật phẩm trong rương:\n";
    rareitems.forEach(item => {
        message += `- ${item.name}: ${item.percent}%\n`;
    });
    alert(message);
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
    document.getElementById('mpc').textContent = `Tiền mỗi click: ${moneyPerClick * mpcMultiplier
        }`;
    document.getElementById('mps').textContent = `Tiền mỗi giây: ${moneyPerSecond * mpsMultiplier
        }`;
}

// Khởi tạo
renderItems();
renderRareItems();
updateDisplay();
