# YemekSiparis
Proje, Onur Güler  (170202031) tarafından
ionic 5 framework ile yazılmıştır.

### Projeyi çalıştırma adımları

` git clone https://github.com/Onurgler/YemekSiparis.git `

Daha sonra komut satırında, indirdiğiniz "..\YemekSiparis" dosya dizinine gelip 

` npm install ` ve ` npm audit fix ` kodlarını sırayla çalıştırınız.

İndirme işlemleri bittikten sonra 

` ionic serve ` komutu ile uygulamayı **http://localhost:8100** üzerinde ayağa kaldırabilirsiniz.

## Proje detayı ve görselleri 
Ana sayfada slide yapısı ile 2 ayrı sayfa vardır.

![Ana1](https://user-images.githubusercontent.com/56413820/104850592-09409980-5901-11eb-967b-2f144a6e5b4c.png)   ![Ana2](https://user-images.githubusercontent.com/56413820/104850635-3c832880-5901-11eb-8f3e-3eff2da8ed22.png)

Login ve Database işlemleri için firebase kullanılmıştır. Ionic ile firebase in haberleşmesi için gerekli tanımlamalar "src/environments/environment.ts" dosyasında tanımlanmıştır.
"src/app/services" klasöründe ise fonksiyonlar tanımlanmıştır.   

<img src="https://user-images.githubusercontent.com/56413820/104850698-a4397380-5901-11eb-9c0d-5a5e27937a8c.png" width="287" height="536"/>  <img src="https://user-images.githubusercontent.com/56413820/104850937-05157b80-5903-11eb-84bc-ec894c0f5a1b.png" width="287" height="536"/>
<img src="https://user-images.githubusercontent.com/56413820/104850769-1611bd00-5902-11eb-8278-9b4b8d33a416.png" width="287" height="536"/>

Kullanıcı hesabıyla giriş yaptığında istediği sayıda sipariş verip siparişlerini görüntüleyebilir. Logout tuşu ile hesaptan çıkış yapıp ana sayfaya dönülebilir. 

![image](https://user-images.githubusercontent.com/56413820/104850793-35a8e580-5902-11eb-839a-81dd3212da6a.png)
![image](https://user-images.githubusercontent.com/56413820/104850815-55400e00-5902-11eb-9a61-2b73eed53fe2.png)   ![image](https://user-images.githubusercontent.com/56413820/104850839-7c96db00-5902-11eb-9ae3-a0d075c5ed2b.png)
