const buku={
    judul:"mengoding itu asik",
    penulis:"yofiana",
    tahun_terbit:"2028",
 
    dibaca:function(){
        console.log("Buku ini dipelajari di mapel kejuruan" + this.judul);
    }
};

const mobil={
    merek:"kia picanto",
    warna:"biru muda",
    kecepatan:0,

    jalan:function(){
        this.kecepatan +=100;
        console.log("mobil berjalan di kecepatan" + this.kecepatan);
    }
};

console.log(mobil.merek);
mobil.jalan();


console.log(buku.judul);
   


buku.dibaca();