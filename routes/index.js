var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index.html', { title: 'Express' });
  res.json({ error: 'ffff' });
});

// 推荐 tabar
router.get('/api/indexList/data', function(req, res, next) {
  // res.render('index.html', { title: 'Express' });
  res.send({
				code: 0,
				data: {
					topBar: [
								{id: 1, name: "推荐"},
								{id: 2, name: "运动户外"},
								{id: 3, name: "服饰内衣"},
								{id: 4, name: "鞋靴箱包"},
								{id: 5, name: "美妆个护"},
								{id: 6, name: "家居数码"},
								{id: 7, name: "食品母婴"},
							],
					data: [
						{
							type: "indexSwiperList",
							data: [
								{imgurl: "../../static/swiper/swiper1.jpg"},
								{imgurl: "../../static/swiper/swiper2.jpg"},
								{imgurl: "../../static/swiper/swiper3.jpg"},
							]
						},
						{
							type: "recommendList",
							data: [
										{
											bigImg: "../../static/swiper/Children.jpg",
											data: [
												{imgurl: "../../static/swiper/Children1.jpg"},
												{imgurl: "../../static/swiper/Children2.jpg"},
												{imgurl: "../../static/swiper/Children3.jpg"},
											]
										},
										{
											bigImg: "../../static/swiper/Furnishing.jpg",
											data: [
												{imgurl: "../../static/swiper/Furnishing1.jpg"},
												{imgurl: "../../static/swiper/Furnishing2.jpg"},
												{imgurl: "../../static/swiper/Furnishing3.jpg"},
											]
										}
									]
						},
						{
							type: "commodityList",
							data: [
										{	
											id:1,
											imgurl: "../../static/swiper/commodity1.jpg",
											name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
											nowPrice: "299",
											odlePrice: "529",
											discount: "4.3"
										},
										{
											id:2,
											imgurl: "../../static/swiper/commodity2.jpg",
											name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
											nowPrice: "299",
											odlePrice: "529",
											discount: "4.3"
										},
										{
											id:3,
											imgurl: "../../static/swiper/commodity3.jpg",
											name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
											nowPrice: "299",
											odlePrice: "529",
											discount: "4.3"
										},
										{
											id:4,
											imgurl: "../../static/swiper/commodity4.jpg",
											name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
											nowPrice: "299",
											odlePrice: "529",
											discount: "4.3"
										},
									]
						}
					]
				} ,
			});
});
// 推荐 触底获取更多数据
router.get('/api/classify/1/data/1', function(req, res, next) {
	res.json({
		code: 0,
		data:[
			{
				type: "commodityList",
				data: [
						{	
							id:1,
							imgurl: "../../static/swiper/commodity1.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:2,
							imgurl: "../../static/swiper/commodity2.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:3,
							imgurl: "../../static/swiper/commodity3.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:4,
							imgurl: "../../static/swiper/commodity4.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
					]
			}
		]
	});
});
// 运动户外
router.get('/api/classify/2/data/1', function(req, res, next) {
  // res.render('index.html', { title: 'Express' });
  res.json({ 
				code: 0,
				data: [
					{
						type: "bannerList",
						imgurl: "../../static/banner/banner1.jpg"
					},
					{
						type: "iconsList",
						data: [
									{id: 1, name: "运动户外",imgurl: "../../static/banner/icons1.png"},
									{id: 2, name: "运动户外",imgurl: "../../static/banner/icons2.png"},
									{id: 3, name: "运动户外",imgurl: "../../static/banner/icons3.png"},
									{id: 4, name: "运动户外",imgurl: "../../static/banner/icons4.png"},
									{id: 5, name: "运动户外",imgurl: "../../static/banner/icons5.png"},
									{id: 6, name: "运动户外",imgurl: "../../static/banner/icons6.png"},
									{id: 7, name: "运动户外",imgurl: "../../static/banner/icons7.png"},
									{id: 7, name: "运动户外",imgurl: "../../static/banner/icons8.png"}
								]
					},
					{
						type: "hotList",
						data: [
								{
									id:1,
									imgurl: "../../static/banner/hot1.jpg",
									commodityTitle: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
									nowPrice: "299",
									odlePrice: "529",
									discount: "4.3"
								},
								{
									id:2,
									imgurl: "../../static/banner/hot2.jpg",
									commodityTitle: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
									nowPrice: "299",
									odlePrice: "529",
									discount: "4.3"
								},
								{
									id:3,
									imgurl: "../../static/banner/hot3.jpg",
									commodityTitle: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
									nowPrice: "299",
									odlePrice: "529",
									discount: "4.3"
								}
								]
					},
					{
						type: "shopList",
						data: [
								{
									bigImg: "../../static/banner/shop.jpg",
									 data: [
										 {
										 	id:1,
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:2,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:3,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:4,
										 	imgurl: "../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:6,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:7,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:8,
										 	imgurl: "../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 }			
									 ]
								},
								{
									bigImg: "../../static/banner/shop.jpg",
									 data: [
										 {
										 	id:1,
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:2,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:3,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:4,
										 	imgurl: "../../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:6,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:7,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:8,
										 	imgurl: "../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 }			
									 ]
								}
							]
					},
					{
						type: "commodityList",
						data: [
									{	
										id:1,
										imgurl: "../../static/swiper/commodity1.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
									{
										id:2,
										imgurl: "../../static/swiper/commodity2.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
									{
										id:3,
										imgurl: "../../static/swiper/commodity3.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
									{
										id:4,
										imgurl: "../../static/swiper/commodity4.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
								]
					}	
				]
	});
});
// 运动户外 第一次触底获取更多数据
router.get('/api/classify/2/data/2', function(req, res, next) {
	res.json({
		code: 0,
		data:[
			{
				type: "commodityList",
				data: [
						{	
							id:1,
							imgurl: "../../static/swiper/commodity1.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:2,
							imgurl: "../../static/swiper/commodity2.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:3,
							imgurl: "../../static/swiper/commodity3.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:4,
							imgurl: "../../static/swiper/commodity4.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
				]
			}
		]
	})
});
// 运动户外 第二次触底获取更多数据
router.get('/api/classify/2/data/3', function(req, res, next) {
	res.json({
		code: 0,
		data:[
			{
				type: "commodityList",
				data: [
						{	
							id:1,
							imgurl: "../../static/swiper/commodity1.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:2,
							imgurl: "../../static/swiper/commodity2.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:3,
							imgurl: "../../static/swiper/commodity3.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
						{
							id:4,
							imgurl: "../../static/swiper/commodity4.jpg",
							name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
							nowPrice: "299",
							odlePrice: "529",
							discount: "4.3"
						},
				]
			}
		]
	});
});
// 服饰内衣
router.get('/api/classify/3/data/1', function(req, res, next) {
  // res.render('index.html', { title: 'Express' });
	res.json({ 
				code: 0,
				data: [
					{
						type: "bannerList",
						imgurl: "../../static/banner/banner1.jpg"
					},
					{
						type: "iconsList",
						data: [
										{id: 1, name: "服饰内衣",imgurl: "../../static/banner/icons1.png"},
										{id: 2, name: "服饰内衣",imgurl: "../../static/banner/icons2.png"},
										{id: 3, name: "服饰内衣",imgurl: "../../static/banner/icons3.png"},
										{id: 4, name: "服饰内衣",imgurl: "../../static/banner/icons4.png"},
										{id: 5, name: "服饰内衣",imgurl: "../../static/banner/icons5.png"},
										{id: 6, name: "服饰内衣",imgurl: "../../static/banner/icons6.png"},
										{id: 7, name: "服饰内衣",imgurl: "../../static/banner/icons7.png"},
										{id: 7, name: "服饰内衣",imgurl: "../../static/banner/icons8.png"}
									]
					},
					{
						type: "hotList",
						data: [
								{
									id:1,
									imgurl: "../../static/banner/hot1.jpg",
									commodityTitle: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
									nowPrice: "299",
									odlePrice: "529",
									discount: "4.3"
								},
								{
									id:2,
									imgurl: "../../static/banner/hot2.jpg",
									commodityTitle: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
									nowPrice: "299",
									odlePrice: "529",
									discount: "4.3"
								},
								{
									id:3,
									imgurl: "../../static/banner/hot3.jpg",
									commodityTitle: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
									nowPrice: "299",
									odlePrice: "529",
									discount: "4.3"
								}
							]
					},
					{
						type: "shopList",
						data: [
								{
									bigImg: "../../static/banner/shop.jpg",
									 data: [
										 {
										 	id:1,
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:2,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:3,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:4,
										 	imgurl: "../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:6,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:7,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:8,
										 	imgurl: "../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 }			
									 ]
								},
								{
									bigImg: "../../static/banner/shop.jpg",
									 data: [
										 {
										 	id:1,
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:2,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:3,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:4,
										 	imgurl: "../../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	imgurl: "../../static/banner/shop1.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:6,
										 	imgurl: "../../static/banner/shop2.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:7,
										 	imgurl: "../../static/banner/shop3.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 },
										 {
										 	id:8,
										 	imgurl: "../../static/banner/shop4.jpg",
										 	name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										 	nowPrice: "299",
										 	odlePrice: "529",
										 	discount: "4.3"
										 }			
									 ]
								}
							]
					},
					{
						type: "commodityList",
						data: [
									{
										id:1,
										imgurl: "../../static/swiper/commodity1.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
									{
										id:2,
										imgurl: "../../static/swiper/commodity2.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
									{
										id:3,
										imgurl: "../../static/swiper/commodity3.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
									{
										id:4,
										imgurl: "../../static/swiper/commodity4.jpg",
										name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
										nowPrice: "299",
										odlePrice: "529",
										discount: "4.3"
									},
						    ]
					}	
				]
	});
});

module.exports = router;