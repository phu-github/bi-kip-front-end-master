Một số rule của parallax
- Khi chạy cậu lệnh này  
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    ==> id= "scene" : sẽ được tự động add style , postion: relative


- Thông số data-depth="number"
+ number LÀ SỐ ÂM chuột di chuyển hướng nào thì nó elmenent sẽ di chuyển theo hướng đó
+ number LÀ SỐ DƯƠNG chuột di chuyển hướng nào thì nó elmenent sẽ di chuyển NGƯỢC theo hướng đó
+ trị tuyệt đối Độ của number càng lớn thì mức độ di chuyển của element đó càng đi được xa 

- Thông số 