const userInfo = JSON.parse(localStorage.getItem('userInfo'));
if (userInfo) {
    displayUserInfo(userInfo);
}

function displayUserInfo(userInfo) {
    // Truy cập đến phần tử có id="user-profile"
    let userProfile = document.getElementById("user-profile");

    // Tạo HTML để hiển thị thông tin tài khoản
    let userHTML = `
        <div class="user-avatar">
        <i class="ti-user"></i>
        </div>
        <div class="user-name">${userInfo.username}</div>
    `;

    // Gán HTML vào phần tử user-profile
    userProfile.innerHTML = userHTML;
}