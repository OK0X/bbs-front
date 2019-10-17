<template>
  <q-page class="mypage">
    <q-card class="about-me">
      <q-card-section>
        <h1>关于我</h1>
      </q-card-section>
      <q-separator />
      <q-card-section v-html="content"></q-card-section>
    </q-card>
  </q-page>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      content:
        '<p><b>网名：</b>BlockStar<br><b>职业：</b>全栈工程师，自由创业者<br><b>工作经历：</b>09年进入移动互联网行业从事android手机应用开发，曾在华为2012实验室和人工智能使能部长期从事架构师的工作，13开始接触区块链行业，并致力于区块链技术的研究，从华为出来后开始从事区块链方面的创业。<br><b>擅长：</b>技术研究，架构设计，技术管理，开发效率提升<br><b>技术栈：</b>java，android，cordova，html，js，css，vuejs，solidity，golang，cosmos</p><p>以下是本人利用quasar框架开发的区块链类应用：</p><p>web端：<a href="https://m.ok0x.com" rel="noopener noreferrer" target="_blank">https://m.ok0x.com</a></p><p>	</p><p><img style="width:40%" src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/4e13e6a9408059e68066707f22e755af.jpg"></p><p><img style="width:40%" src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/5f62999e4030981c80607d5900aabb7b.jpg"></p><p>这是一个链上的以太坊数字货币钱包，以上是在微信里面运行的界面效果，可断网创建助记词，拥有冷钱包的安全机制和微信小程序般的方便易用。基于quasar的开发设计使其体验能与原生相媲美，这也是业界第一款可以在微信里面直接使用的以太坊数字资产链上钱包。微信消息中输入<span style="color:blue">m.ok0x.com</span>即可访问。该应用也有android app版：<a href="https://bmob-cdn-20212.bmobcloud.com/2019/09/03/dc58f229407496ef80c91704c1057066.apk" rel="noopener noreferrer" target="_blank">点击此处下载</a>，亦可进入<a href="https://www.ok0x.com" rel="noopener noreferrer" target="_blank">www.ok0x.com</a>网站在wallet里面下载。</p><p>除了对区块链技术的研究，我也尝试进行了一些社区的建设。下面是我在华为时期创建的公司内最早也是最大的区块链交流社区：</p><p><img style="width:100%" src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/8f06738a404c635c8094c5da226cc1a0.jpg"></p><p>除了社区我也建有公众号和微信群：</p><img src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/86c60ac9402a6ab48075f7be8f87862e.jpg"><p>里面有大量我关于这个行业的原创文章</p><p>目前，我专注于cosmos技术的研究。希望用cosmos技术为企业构建适合自己业务场景的区块链。</p><p>最后附上我的微信：914730875，欢迎和我联系。</p><p><br></p>'
    };
  }
};
</script>
<style scoped>
.about-me {
  width: 100%;
  max-width: 1100px;
  overflow: auto;
}
</style>