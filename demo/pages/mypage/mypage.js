Page({
  data:{
    mytext:100,
    mytext2:{
      num:90
    }

  },
  onLoad: function(opt)
  {
    console.log('执行onLoad');
    //this.anyfunction();
  },
  anyfunction: function() {
    console.log('执行anyfunction');
    this.setData({
      mytext:200,
      'mytext2.num':100
    });
  }
})