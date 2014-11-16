/**
 * Created by youngmoon on 11/16/14.
 */
Template.postItem.helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
})