async function downloadVideo(){

  const url = document.getElementById("url").value;

  const result = document.getElementById("result");

  const loading = document.getElementById("loading");

  if(url === ""){
    alert("Masukkan Link TikTok!");
    return;
  }

  loading.innerHTML = "Mengambil Video...";

  result.innerHTML = "";

  try{

    const response = await fetch(
      `https://tikwm.com/api/?url=${url}`
    );

    const data = await response.json();

    loading.innerHTML = "";

    result.innerHTML = `

      <video controls>
        <source src="${data.data.play}" type="video/mp4">
      </video>

      <a
        class="download-btn"
        href="${data.data.play}"
        download
      >
        Download Video
      </a>

    `;

  }catch(error){

    loading.innerHTML = "";

    result.innerHTML = `
      <p>Gagal mengambil video.</p>
    `;

  }
}