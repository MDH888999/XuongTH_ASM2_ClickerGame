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
        increment: 5,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 04',
        type: 'nftmpc',
        img: 'nftimg/nft04.avif',
        gia: 100,
        increment: 5,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 05',
        type: 'nftmps',
        img: 'nftimg/nft05.avif',
        gia: 5000,
        increment: 30,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 06',
        type: 'nftmpc',
        img: 'nftimg/nft06.avif',
        gia: 1000,
        increment: 30,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 07',
        type: 'nftmps',
        img: 'nftimg/nft07.avif',
        gia: 50000,
        increment: 100,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 08',
        type: 'nftmpc',
        img: 'nftimg/nft08.avif',
        gia: 10000,
        increment: 100,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 09',
        type: 'nftmps',
        img: 'nftimg/nft09.avif',
        gia: 500000,
        increment: 500,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 10',
        type: 'nftmpc',
        img: 'nftimg/nft10.avif',
        gia: 100000,
        increment: 500,
        unit: 'Tiền mỗi click',
        quantity: 0
    },
    {
        name: 'NFT 11',
        type: 'nftmps',
        img: 'nftimg/nft11.avif',
        gia: 5000000,
        increment: 1000,
        unit: 'Tiền mỗi giây',
        quantity: 0
    },
    {
        name: 'NFT 12',
        type: 'nftmpc',
        img: 'nftimg/nft12.avif',
        gia: 1000000,
        increment: 1000,
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
        value: 0.001,
        unit: 'Tiền mỗi giây',
        percent: 50,
        quantity: 0
    },
    {
        name: 'Rare NFT 02',
        type: 'rareNFTmpc',
        img: 'nftimg/rarenft02.avif',
        increment: 2,
        value: 0.001,
        unit: 'Tiền mỗi click',
        percent: 50,
        quantity: 0
    }
];
let hasRare01 = false; // Kiểm tra nếu rareNFTmps đã có trong rương
let hasRare02 = false; // Kiểm tra nếu rareNFTmpc đã có trong rương
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
            <div class="exchangeButton">
                <button onclick="exchangeRareItem(${index})" class="buyButton">Đổi token</button>
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
        item.gia = Math.floor(item.gia * 1.1); // Tăng giá sau mỗi lần mua
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
// Kết nối tới mạng Solana
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
// Kết nối với ví Phantom
async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            const publicKey = response.publicKey?.toString();

            if (!publicKey || !isBase58(publicKey)) {
                throw new Error("Public key từ ví không hợp lệ.");
            }

            console.log("Connected with public key:", publicKey);
            document.getElementById("status").textContent = "Đã kết nối";
        } catch (error) {
            console.error("Kết nối thất bại:", error);
            alert("Kết nối thất bại. Hãy thử lại.");
        }
    } else {
        alert("Hãy cài đặt ví Phantom để tiếp tục.");
        window.open("https://phantom.app/", "_blank");
    }
}
// Hàm kiểm tra Base58 hợp lệ
function isBase58(string) {
    const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/; // Regex cho Base58
    return base58Regex.test(string);
}
// Hàm gửi token
async function sendToken(userPublicKey, amount) {
    try {
        // Kiểm tra Base58
        if (!isBase58(userPublicKey)) {
            console.error("Public key không hợp lệ:", userPublicKey);
            throw new Error("Public key không hợp lệ. Hãy kết nối lại ví.");
        }

        const toPublicKey = new solanaWeb3.PublicKey(userPublicKey);
        console.log("Public key hợp lệ:", toPublicKey.toString());

        // Ví gửi token (thay thế bằng ví thật trong môi trường production)
        const fromWallet = solanaWeb3.Keypair.generate();
        const transaction = new solanaWeb3.Transaction().add(
            solanaWeb3.SystemProgram.transfer({
                fromPubkey: fromWallet.publicKey,
                toPubkey: toPublicKey,
                lamports: amount * solanaWeb3.LAMPORTS_PER_SOL,  // Chuyển đổi token sang lamports
            })
        );

        const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [fromWallet]);
        console.log("Transaction Signature:", signature);
    } catch (error) {
        console.error("Gửi token thất bại:", error);
        throw error;
    }
}


// Hàm đổi vật phẩm Rare Item thành Token
async function exchangeRareItem(index) {
    const rareItem = rareitems[index];
    const userPublicKey = window.solana?.publicKey?.toString();

    if (!userPublicKey || userPublicKey.trim() === "" || !isBase58(userPublicKey)) {
        console.error("Public key không hợp lệ:", userPublicKey);
        alert("Không thể tìm thấy hoặc public key không hợp lệ. Hãy kết nối ví trước.");
        return;
    }

    if (rareItem.quantity > 0) {
        try {
            const tokenAmount = rareItem.value; // Số lượng token đổi
            await sendToken(userPublicKey, tokenAmount);
            rareItem.quantity--; // Giảm số lượng rare item
            document.getElementById(`soluong${rareItem.type}${index}`).textContent = `${rareItem.name}: ${rareItem.quantity}`;
            alert(`Đã đổi thành công ${tokenAmount} token.`);
        } catch (error) {
            console.error("Đổi token thất bại:", error);
        }
    } else {
        alert("Bạn không có vật phẩm này.");
    }
}





// Khởi tạo
renderItems();
renderRareItems();
updateDisplay();
