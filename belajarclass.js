class Siswapplg{
    constructor(nama,kelas){
        this.nama = nama;
        this.kelas = kelas;
    }
    perkenalan(){
        console.log(`nama : ${this.nama}`);
        console.log(`kelas: ${this.kelas}`);    


    }
}

const siswa1 = new Siswapplg("yofi","11pplg");
siswa1.perkenalan();

class Produk{
    constructor(nama,harga,jumlah){
        this.nama = nama;
        this.harga =harga;
        this.jumlah = jumlah;
    }
    tampilkanInfo(){
        console.log("Nama produk: " + this.nama);
        console.log("harga :Rp." +this.harga);
        console.log("jumlah : " +this.jumlah);

    }
    hitungdiskon(persen){
        return this.harga-(this.harga * persen/100);
    }
}

const produk1 =new produk ("indomie goreng",35000)
produk1.tampilkanInfo();
console.log("harga produk1 setelah diskon:" + produk1.hitngdiskon(15))
const monitor =new produk("monitor samsung", 20000,20);
monitor.tampilkaninfo();




