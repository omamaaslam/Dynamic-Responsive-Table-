window.addEventListener("load", function () {
  var loader = this.document.querySelector(".loader");
  loader.style.display = "block";
  this.setTimeout(()=>{ 
    loader.style.display = "none";
    renderTableData(mydb);
  }, 5000)

  const mydb = [
    {
      id: "1",
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
      city: "Lahore",
      address: "Model Town",
      width: 20,
    },
    {
      id: "2",
      name: "Muhammad Farooq",
      email: "farooq@gmail.com",
      city: "Lahore",
      address: "Gulber III",
      width: 20,
    },
    {
      id: "3",
      name: "Nisar Khan",
      email: "nisar@gmail.com",
      city: "Islamabad",
      address: "Kashmir Highway",
      width: 20,
    },
    {
      id: "4",
      name: "Mubeen Naeem",
      email: "mubeen@gmail.com",
      city: "Rawalpindi",
      address: "Chakri Road",
      width: 20,
    },
    {
      id: "5",
      name: "Khurram Rasheed",
      email: "khurram@gmail.com",
      city: "Karachi",
      address: "Shahra e Faisal",
      width: 20,
    },
    {
      id: "6",
      name: "Omama Aslam",
      email: "omamam@gmail.com",
      city: "Lahore",
      address: "Township",
      width: 20,
    },
    {
      id: "7",
      name: "Umer Khalid",
      email: "umerkhalid@gmail.com",
      city: "Lahore",
      address: "Sultan Pura",
      width: 20,
    },
    {
      id: "8",
      name: "Zeeshan Khan",
      email: "zeeshan@gmail.com",
      city: "Azad Kashmir",
      address: "Arang Khel",
      width: 20,
    },
    {
      id: "9",
      name: "Mubeen Naeem",
      email: "mubeen@gmail.com",
      city: "Lahore",
      address: "Johar Town",
      width: 20,
    },
    {
      id: "10",
      name: "Asfand Malik",
      email: "asfand@gmail.com",
      city: "Lahore",
      address: "PIA Society",
      width: 20,
    },
    {
      id: "11",
      name: "Usama Naeem",
      email: "usama@gmail.com",
      city: "Lahore",
      address: "Darogewala",
      width: 20,
    },
    {
      id: "12",
      name: "Ramish Imtiaz",
      email: "ramish@gmail.com",
      city: "Lahore",
      address: "Sultan Pura",
      width: 20,
    },
    {
      id: "13",
      name: "Saqib Javed",
      email: "saqib@gmail.com",
      city: "Lahore",
      address: "Sabzazar",
      width: 20,
    },
    {
      id: "14",
      name: "Malik Saqib",
      email: "maliksaqib@gmail.com",
      city: "Lahore",
      address: "DHA",
      width: 20,
    },
    {
      id: "15",
      name: "Asif Zia",
      email: "asifzia@gmail.com",
      city: "Sheikhpura",
      address: "Model Society",
      width: 20,
    },
    {
      id: "16",
      name: "Robass Arshad",
      email: "robass@gmail.com",
      city: "Lahore",
      address: "Johar Town",
      width: 20,
    },
    {
      id: "16",
      name: "Zeeshan Khan",
      email: "zeeshan@gmail.com",
      city: "Peshwar",
      address: "Bara market",
      width: 20,
    },
    {
      id: "17",
      name: "Abdul Raffay",
      email: "abdulraffay@gmail.com",
      city: "Faisalabad",
      address: "Tata Bazar",
      width: 20,
    },
    {
      id: "18",
      name: "Bilawal ALi",
      email: "mbilawal@gmail.com",
      city: "Karachi",
      address: "Landhi",
      width: 20,
    },
    {
      id: "19",
      name: "Usman Khalid",
      email: "usmankhalid@gmail.com",
      city: "Lahore",
      address: "PIA Society",
      width: 20,
    },
    {
      id: "20",
      name: "Waleed Butt",
      email: "waleedbutt@gmail.com",
      city: "Lahore",
      address: "Behria Town",
      width: 20,
    },
  ];

  function renderTableData(data) {
    var table_content = this.document.querySelector(".table_content");
    var tableHeaders = ["Id", "Name", "Email", "Address", "City"];
    tableHeaders.forEach((h) => {
      var rTableHead = document.querySelector(".rTableHead");
      var thead = document.createElement("div");
      thead.classList.add("thead");
      thead.style.width = "20%";
      rTableHead.appendChild(thead);
      thead.innerText = h;
    });

    data.forEach((d) => {
      var tr = document.createElement("div");
      tr.classList.add("tr");
      table_content.appendChild(tr);
      tr.innerHTML = `
         <div class="td" style='width: ${d.width}%'>${d.id}</div>
         <div class="td" style='width: ${d.width}%'>${d.name}</div>
         <div class="td" style='width: ${d.width}%'>${d.email}</div>
         <div class="td" style='width: ${d.width}%'>${d.address}</div>
         <div class="td" style='width: ${d.width}%'>${d.city}</div>
         `;
    });
  }
});
