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
        '<p>本人笔名BlockStar, 09年进入互联网行业，12年转向安卓平台手机应用开发，曾在华为2012实验室IT部门长期从事移动应用开发方案设计等工作，后面又随公司人工智能部门建设，从事人工智能相关的开发工作。长期从事移动互联网的开发工作让我熟练地掌握了移动应用开发相关技术，熟悉相关开发流程，能够根据项目具体情况做出最佳的技术方案设计，并配合各种流程工具运用，最大化的提高开发团队整体作战效率。加入AI部门后，进一步扩大了我的技术广度，对于人工智能相关内容也有一定了解。除了移动app对前端web技术也有所实践,可熟练地运用quasar框架开发多端应用，利用quasar框架实现多端代码效果即时展现，实行一套代码多端复用，极大提高了开发效率。</p><p>以下使本人利用quasar框架开发的项目展示：</p><p>web端：<a href="https://m.ok0x.com" rel="noopener noreferrer" target="_blank">https://m.ok0x.com</a></p><p>	</p><p><img style="width:60%" src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/4e13e6a9408059e68066707f22e755af.jpg"></p><p><img style="width:60%" src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/5f62999e4030981c80607d5900aabb7b.jpg"></p><p>这是一个链上的以太坊数字货币钱包，以上是在微信里面运行的界面效果，创建助记词后再次从微信里面打开无需导入助记词，采用的AES对称加密亦无需担心助记词被盗。基于quasar的开发设计使其体验能与原生相媲美，这也是业界第一款可以在微信里面直接使用的以太坊数字资产链上钱包。</p><p>该应用也有android app版：<a href="https://bmob-cdn-20212.bmobcloud.com/2019/09/03/dc58f229407496ef80c91704c1057066.apk" rel="noopener noreferrer" target="_blank">点击此处下载</a>，亦可进入<a href="https://www.ok0x.com" rel="noopener noreferrer" target="_blank">www.ok0x.com</a>网站在wallet里面下载。</p><p>除了以上钱包的开发，我亦开发过复杂的以太坊智能合约供大量的用户在以太坊主网使用。通过开发钱包和DAPP的实践使我熟练地掌握了solidity语言，智能合约地编写，部署，钱包的相关原理，本人是13年接触比特币，并持续关注和研究区块链领域的技术，所以对于比特币，以太坊有较熟悉的了解，对整个区块链行业的发展也有较深的了解和看法。</p><p>除了对区块链技术的研究，我也尝试进行了一些社区的建设。下面是我在华为时期创建的公司内最早也是最大的区块链交流社区：</p><p><img style="width:100%" src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/8f06738a404c635c8094c5da226cc1a0.jpg"></p><p>除了社区我也建有公众号和微信群：</p><img src="https://bmob-cdn-24079.bmobpay.com/2019/10/10/86c60ac9402a6ab48075f7be8f87862e.jpg"><p>里面有大量我关于这个行业的原创文章</p><p>目前，我专注于cosmos技术的研究。希望用cosmos技术为企业构建自己业务场景的区块链。</p><p>最后附上我的微信：914730875，欢迎和我交流。</p><p><br></p>'
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