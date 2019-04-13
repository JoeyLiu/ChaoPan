import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  today: any;
  productList = [];
  public getSkuList() {
    this.fixSkus();
    this.addIndextoProducts();
    return this.productList;
  }
  private fixSkus() {
    // console.log(this.productList.length);
    for (let i = 0; i < this.productList.length; i++) {
      const pdt = this.productList[i];
      // console.log(pdt.productName + ' has ' + pdt.skus.length + ' sku.');
      for (let j = 0; j < pdt.skus.length; j++) {
        pdt.skus[j].index = j;
      }
      // console.log('After fixing SKUS:');
      // console.log(pdt.skus);
    }
  }
  private addIndextoProducts() {
    for (let i = 0; i < this.productList.length; i++) {
      const pdt = this.productList[i];
      pdt.index = i;
    }
  }
  constructor() {
    const date = new Date();
    const month = date.getMonth() + 1;
    this.today = date.getFullYear() + '-' + month + '-' + date.getDate();
    console.log(this.today);
    const pdt1 = {
      productName: 'Yeezy 500 Blush',
      brand: 'Yeezy 500',
      model: 'adidas Yeezy Boost 500',
      color: 'Blush',
      startDate: '2018-02-16',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'cc913e2b-9228-4f48-b768-4d7d74671381',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '98f08761-521f-439d-be88-4e20798c9eab',
          'description' : '4',
          'price' : '617',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1246b18a-5d41-4142-856e-a818541ffc28',
          'description' : '4.5',
          'price' : '825',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '361cd1de-40c7-4988-bf1c-adb2e0c93751',
          'description' : '5',
          'price' : '590',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8964333c-5e3a-428c-b131-8597e9b88232',
          'description' : '5.5',
          'price' : '680',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd0f94652-c54a-4b3a-8422-ba1f603b1a01',
          'description' : '6',
          'price' : '569',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e43cf8d9-f6ba-47d9-aaec-c5063119b098',
          'description' : '6.5',
          'price' : '625',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ec359530-0cf0-4437-8183-a952e2ef71b2',
          'description' : '7',
          'price' : '450',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e03b8255-c043-4bcf-86dc-9827f313aaf9',
          'description' : '7.5',
          'price' : '473',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0bf24310-a323-4d1b-a700-e0d1265c9481',
          'description' : '8',
          'price' : '395',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f91a535d-6a08-4729-b520-f289e240e9e8',
          'description' : '8.5',
          'price' : '361',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ec482c4c-c8b0-4363-ba5e-8cd467ad66e7',
          'description' : '9',
          'price' : '348',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ac67aa9e-3ce2-462c-8e27-d5b013edd104',
          'description' : '9.5',
          'price' : '342',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '87e68857-eb77-4036-9381-1bacbc42ebf5',
          'description' : '10',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c19c72ac-4a41-4169-b4bf-2a029153e9f6',
          'description' : '10.5',
          'price' : '297',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '157c6599-fddd-4d57-a5f6-bdf0b0883197',
          'description' : '11',
          'price' : '279',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7d5de7f3-de6b-4fa1-a7a9-5963cfdff0b7',
          'description' : '11.5',
          'price' : '263',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '268991f4-f5cb-4d98-9580-19d427b9aa31',
          'description' : '12',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '213ace74-bfa7-4465-b0bd-cc4c0fab16b4',
          'description' : '12.5',
          'price' : '278',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '575bbd3b-8df6-4c11-a5b2-99885bd01410',
          'description' : '13',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b78dea6e-50fe-456d-85d2-011b1a654510',
          'description' : '13.5',
          'price' : '268',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '635ed448-ed97-4145-9049-63707aadb085',
          'description' : '14',
          'price' : '294',
          'priceCurrency' : 'USD'
        }
      ]

    };
    const pdt7 = {
      productName: 'Yeezy 500 Black',
      brand: 'Yeezy 500',
      model: 'adidas Yeezy Boost 500',
      color: 'Black',
      startDate: '2018-07-07',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '2331dbb6-81d0-409c-840c-3d813cc94194',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5801ba38-1c79-4662-a306-7dd96b12fc1d',
          'description' : '4',
          'price' : '425',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b8a467c2-ddac-44ef-9f49-1a6a284f8a6d',
          'description' : '4.5',
          'price' : '435',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fc531269-40a6-44b7-944f-9c752bb50efa',
          'description' : '5',
          'price' : '440',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '97613d27-84df-4e9b-806d-510b02dfabc0',
          'description' : '5.5',
          'price' : '483',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7f2637d6-ea7e-47ab-a945-6acad2799a07',
          'description' : '6',
          'price' : '450',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '587da824-0ba3-4ec5-ba14-d7b7b75b94bc',
          'description' : '6.5',
          'price' : '439',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b3f172cc-6d3b-4e31-939e-3d6f4a405a36',
          'description' : '7',
          'price' : '449',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4e2a7664-855e-4cb4-bd7a-af3605fd3ef7',
          'description' : '7.5',
          'price' : '429',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f6d1bff1-a208-40f8-ad68-fb1d64f2239b',
          'description' : '8',
          'price' : '428',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '77c5c8a9-3954-4377-a00e-58470c4e67ab',
          'description' : '8.5',
          'price' : '409',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c3f0c2f5-b952-4310-ae7c-ad72c181aa1c',
          'description' : '9',
          'price' : '400',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bf518ee0-8331-4d14-b793-a109041d1b47',
          'description' : '9.5',
          'price' : '480',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '07a387d9-192a-40ac-b0c7-12e418dca17c',
          'description' : '10',
          'price' : '420',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '49760c80-5209-48e0-9de9-78dee3a03f15',
          'description' : '10.5',
          'price' : '381',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '449074a2-7059-4a5c-8193-c5fb91aced74',
          'description' : '11',
          'price' : '415',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a559a462-aa51-4369-a2d3-cef722b83252',
          'description' : '11.5',
          'price' : '378',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9a8493c6-b469-4c35-9377-0194f58c0999',
          'description' : '12',
          'price' : '362',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'aa2f5638-8fd4-41d4-90e7-5de40d20bdaa',
          'description' : '12.5',
          'price' : '381',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cf54421e-c625-4f19-8c14-9e385553e7a1',
          'description' : '13',
          'price' : '320',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '753b5227-0812-4eeb-8090-9dca85d1704c',
          'description' : '13.5',
          'price' : '400',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b93f354b-1e01-4db5-8c47-80d2698bc203',
          'description' : '14',
          'price' : '369',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c4f0d314-74bb-4c84-a93a-ff7c0f7f8b99',
          'description' : '15',
          'price' : '591',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7017985b-f8ce-474b-a761-86105688afd3',
          'description' : '16',
          'price' : '715',
          'priceCurrency' : 'USD'
        }
      ]

    };
    const pdt10 = {
      productName: 'Yeezy 500 Yellow',
      brand: 'Yeezy 500',
      model: 'adidas Yeezy Boost 500',
      color: 'Yellow',
      startDate: '2018-06-09',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '1d47f11f-5a10-4763-8637-8cfedeef2b84',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '24b4a353-a52f-49ba-a3ef-3f4053f07dbc',
          'description' : '4',
          'price' : '410',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1f89343a-684a-43d0-9f27-4150230f823d',
          'description' : '4.5',
          'price' : '373',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '71eb695d-9f7b-439c-83d4-f1e566efbd17',
          'description' : '5',
          'price' : '343',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1b1595ba-5fc7-42fc-8021-ac4a622cdc50',
          'description' : '5.5',
          'price' : '369',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '18c3fd45-78a2-4af9-ac20-3eee42cba335',
          'description' : '6',
          'price' : '349',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b1def996-dad5-44c5-823a-d06c4f81e279',
          'description' : '6.5',
          'price' : '345',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '27767f5a-f4dd-4171-a994-4161548b4952',
          'description' : '7',
          'price' : '350',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd5a6d352-9d6c-4afd-8427-2118cf07259c',
          'description' : '7.5',
          'price' : '330',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ff432857-d827-4545-96e8-e21d8bab294d',
          'description' : '8',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f547d264-5c55-4ebc-97ef-8dad3a742867',
          'description' : '8.5',
          'price' : '314',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '82f4807b-f3cd-44c7-a5fb-48c114f62699',
          'description' : '9',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '056bc4fd-843b-48b3-924c-4646f8a4dd13',
          'description' : '9.5',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2cf9b457-3bb2-4f5b-830a-a41782758555',
          'description' : '10',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f98c7cae-23be-41b5-936c-6d6908c194e8',
          'description' : '10.5',
          'price' : '269',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ab191d71-809b-4413-a581-3dec4414247f',
          'description' : '11',
          'price' : '265',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1bca0563-940b-4525-bd03-a78dba7a5fea',
          'description' : '11.5',
          'price' : '240',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2fe9fa77-4baf-49e7-9901-7f04ea63ace8',
          'description' : '12',
          'price' : '230',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9e036279-4dc1-4209-8d04-903b76795857',
          'description' : '12.5',
          'price' : '254',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '59f3e73d-5368-4332-9653-776a544825e4',
          'description' : '13',
          'price' : '234',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '54c3976d-38a1-4e3d-a9f9-ca32216c5ed3',
          'description' : '13.5',
          'price' : '319',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b23afcde-59b7-482d-b103-989f960f8eaa',
          'description' : '14',
          'price' : '255',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a679bf8a-432d-4d13-bdfd-ee6d95c9d200',
          'description' : '--',
          'price' : '900',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '43c85c7a-f017-4f03-93ad-0a81727584b5',
          'description' : '16',
          'price' : '1000',
          'priceCurrency' : 'USD'
        }
      ]

    };
    const pdt5 = {
      productName: 'Yeezy 700 OG',
      brand: 'Yeezy 700',
      model: 'adidas Yeezy Boost 700',
      color: 'OG',
      startDate: '2018-09-15',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '76beb63d-a3b1-4951-a44a-24eee806026e',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd158a8d8-5231-481c-93fb-5e94dc8e87f4',
          'description' : '4',
          'price' : '398',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cd716582-2bdf-4a73-b9c5-8dabe48b41f1',
          'description' : '4.5',
          'price' : '465',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2c34491a-450b-41f8-90f9-58658cda2ad8',
          'description' : '5',
          'price' : '444',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1f4d00c3-a3a4-457a-ae5a-08183966a7fa',
          'description' : '5.5',
          'price' : '452',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9775827f-ca6c-4e8a-9daa-3e8a69215836',
          'description' : '6',
          'price' : '448',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '37f864c2-6e4d-4dea-88eb-201b1cc43b4e',
          'description' : '6.5',
          'price' : '475',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '15ff14cf-2253-4f34-a77a-e896ccd72e65',
          'description' : '7',
          'price' : '449',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bc6a8725-f5ea-414f-814b-27397fa5ebfd',
          'description' : '7.5',
          'price' : '440',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4b733f18-a194-437a-ab4f-1841b8ebc1a6',
          'description' : '8',
          'price' : '415',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9e5f1b18-1225-4859-9fb0-cef858e5839d',
          'description' : '8.5',
          'price' : '415',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'aac89e9b-25a2-4a7f-ac0c-cb7870e2c473',
          'description' : '9',
          'price' : '385',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1dcffa76-c82b-4aae-ab65-697ef0e8071c',
          'description' : '9.5',
          'price' : '394',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd56968b2-f797-4f26-8933-388f72c3f8e9',
          'description' : '10',
          'price' : '380',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8ba7a0fe-bab4-4dc2-b08d-d3ec7debe1c5',
          'description' : '10.5',
          'price' : '385',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9323ccc8-f109-4c46-8c3c-363a652b30e6',
          'description' : '11',
          'price' : '379',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b3d27b2e-b4dc-47cc-a914-c93a944d50c4',
          'description' : '11.5',
          'price' : '390',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'acf7fa88-0f0d-4deb-ba42-1a905e3d737e',
          'description' : '12',
          'price' : '375',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '24b04aa5-fec0-4809-aeaa-a1070ca18346',
          'description' : '12.5',
          'price' : '348',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5ee0da65-f996-43de-817c-a0dd08b8fedf',
          'description' : '13',
          'price' : '370',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bd92b003-2f00-4faa-9d62-4a738f3a1696',
          'description' : '14',
          'price' : '389',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0eeaf2e6-fc9f-493d-b0c2-f8a8f0119400',
          'description' : '15',
          'price' : '1113',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fbbd8ee2-bc7b-405b-86be-4519c1492ee0',
          'description' : '16',
          'price' : '1265',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5609fb7d-969a-4c75-9cfc-754db2ac541f',
          'description' : '17',
          'price' : '1699',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt25 = {
      productName: 'Yeezy 700 Salt',
      brand: 'Yeezy 700',
      model: 'adidas Yeezy Boost 700',
      color: '海盐/Salt',
      startDate: '2019-02-23',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '17677c6a-4995-4190-aba5-b3dde8e93434',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a671f6c5-ba84-4f65-ab57-f93e8562a2f8',
          'description' : '4',
          'price' : '360',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'abd5cfa6-8ac5-43ff-ac9d-0157bf177f7d',
          'description' : '4.5',
          'price' : '400',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c0acf836-64ab-4805-b46a-2568a98c761a',
          'description' : '5',
          'price' : '394',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1bdcd68d-c587-482e-aa3d-8715e11c0fff',
          'description' : '5.5',
          'price' : '390',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4529d7f9-29ba-4217-bd31-f714d93e4438',
          'description' : '6',
          'price' : '379',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bcd4200e-c41a-44e4-8f73-7b0d3dba401a',
          'description' : '6.5',
          'price' : '359',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e8c883f9-e209-4f8a-b5e3-9c006b02fb20',
          'description' : '7',
          'price' : '362',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '767b8f42-55be-4a75-bd8b-61d2dc11cbea',
          'description' : '7.5',
          'price' : '362',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3d51687a-7ed9-4af0-8066-6b2723aa5634',
          'description' : '8',
          'price' : '360',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0113b0d6-b68c-4e78-8649-c3742feb8667',
          'description' : '8.5',
          'price' : '365',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2c99b305-dc79-4951-97e3-f64ed1899117',
          'description' : '9',
          'price' : '355',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2bbc50e4-c653-4e85-a19c-4e8121cf52e6',
          'description' : '9.5',
          'price' : '353',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f102f1cb-3fd1-4f14-a006-060ed06744bc',
          'description' : '10',
          'price' : '335',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ee3742b1-25b0-4eca-bf31-b4ad1c977bd1',
          'description' : '10.5',
          'price' : '336',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e07da65c-e346-4b84-a535-5f82c3393b23',
          'description' : '11',
          'price' : '334',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4937ecd6-79a2-4039-9b6a-2c8dea8e40b6',
          'description' : '11.5',
          'price' : '350',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd70e9966-d3c7-4182-a184-f6b4d3edae8f',
          'description' : '12',
          'price' : '334',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '66e0b70e-617d-4025-8047-7e7da9aa3062',
          'description' : '12.5',
          'price' : '375',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a82090bc-0579-463d-88a1-85804acbec43',
          'description' : '13',
          'price' : '334',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ad81895a-7c86-4ea9-8d66-1ead0d7c2019',
          'description' : '13.5',
          'price' : '480',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6997ed99-bebe-49cb-9c4a-c7809081e575',
          'description' : '14',
          'price' : '342',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '92f1c8b3-cd13-4018-8297-fc91196b22b0',
          'description' : '15',
          'price' : '699',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6a7c237f-fe96-45da-9f25-9558e20e6de8',
          'description' : '16',
          'price' : '710',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c4d11014-c375-4bce-820c-41b51f4c291f',
          'description' : '17',
          'price' : '2800',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt3 = {
      productName: 'adidas-yeezy-500-salt',
      brand: 'Yeezy 500',
      model: 'adidas Yeezy Boost 500',
      color: 'Salt',
      startDate: '2018-11-30',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'd9ec8449-4606-4e10-81bc-351ee32748cf',
          'description': 'All',
          index: 0,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '17d3ea6b-ad3d-4875-80ed-02b2301a0744',
          'description' : '4',
          'price' : '354',
          'priceCurrency' : 'USD',
          index: 1,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3aa1e4ef-d92c-4271-a0ec-7db3371dc060',
          'description' : '4.5',
          'price' : '383',
          'priceCurrency' : 'USD',
          index: 2,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd7e17f60-4948-4bca-963e-75ce7a3cc81f',
          'description' : '5',
          'price' : '360',
          'priceCurrency' : 'USD',
          index: 3,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '44d00de5-2a50-40c8-a3e6-40a15e1e4380',
          'description' : '5.5',
          'price' : '370',
          'priceCurrency' : 'USD',
          index: 4,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f2b647c6-8c95-488f-a97c-5c6735ce9037',
          'description' : '6',
          'price' : '341',
          'priceCurrency' : 'USD',
          index: 5,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'edb596ce-3677-44c4-90c2-00521113fa44',
          'description' : '6.5',
          'price' : '342',
          'priceCurrency' : 'USD',
          index: 6,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8b412d6f-3fdf-4bec-a5b3-56a6ba92f63e',
          'description' : '7',
          'price' : '249',
          'priceCurrency' : 'USD',
          index: 7,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1e191494-ce8a-4ff4-a258-531f548a9b72',
          'description' : '7.5',
          'price' : '242',
          'priceCurrency' : 'USD',
          index: 8,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5c9a5807-b7b5-460b-bb9f-17ccbe48d23e',
          'description' : '8',
          'price' : '243',
          'priceCurrency' : 'USD',
          index: 9,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6731303c-f2b6-4cc9-83be-e0367c4647b7',
          'description' : '8.5',
          'price' : '245',
          'priceCurrency' : 'USD',
          index: 10,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd750a21b-0ddf-4842-bfd8-53bc7d3442a6',
          'description' : '9',
          'price' : '234',
          'priceCurrency' : 'USD',
          index: 11,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cf391d1f-3d5b-4df1-abb5-242b3032d5cb',
          'description' : '9.5',
          'price' : '231',
          'priceCurrency' : 'USD',
          index: 12,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3c1f7756-3702-4792-894c-c1df663581b0',
          'description' : '10',
          'price' : '227',
          'priceCurrency' : 'USD',
          index: 13,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '85d40c14-fe84-4ff5-8475-6f17e79b650c',
          'description' : '10.5',
          'price' : '225',
          'priceCurrency' : 'USD',
          index: 14,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd87719ca-452c-4b55-8ad7-c7fab786faaa',
          'description' : '11',
          'price' : '229',
          'priceCurrency' : 'USD',
          index: 15,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'dcbce391-5761-4fe4-90dd-fa7f98f1031a',
          'description' : '11.5',
          'price' : '225',
          'priceCurrency' : 'USD',
          index: 16,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1f85f7b6-cef9-418d-8b24-01bb6278f40e',
          'description' : '12',
          'price' : '211',
          'priceCurrency' : 'USD',
          index: 17,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '882fd208-7024-4ed0-82c3-9f4b939f33d5',
          'description' : '12.5',
          'price' : '228',
          'priceCurrency' : 'USD',
          index: 18,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3622f7bf-db62-4f33-9956-55870052ab19',
          'description' : '13',
          'price' : '210',
          'priceCurrency' : 'USD',
          index: 19,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '51851de1-daff-430a-a37c-30d0fb525c92',
          'description' : '13.5',
          'price' : '250',
          'priceCurrency' : 'USD',
          index: 20,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4112fca3-8512-4f42-a535-fbdfdbd3fa57',
          'description' : '14',
          'price' : '210',
          'priceCurrency' : 'USD',
          index: 21,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '71ff2d07-776f-4a92-81e5-986d5a27a075',
          'description' : '14.5',
          'price' : '569',
          'priceCurrency' : 'USD',
          index: 22,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b49a7bd1-4345-4204-abc3-0bba25837fca',
          'description' : '15',
          'price' : '500',
          'priceCurrency' : 'USD',
          index: 23,
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '878ddd71-42e7-48c4-aa90-33e4306d6f65',
          'description' : '16',
          'price' : '931',
          'priceCurrency' : 'USD',
          index: 24,
        }
      ]
    };
    const pdt6 = {
      productName: 'Yeezy 350 v2 Beluga',
      brand: 'Yeezy 350',
      model: 'adidas Yeezy Boost 350 V2',
      color: 'Beluga',
      startDate: '2017-11-25',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '7f8f68d3-d834-400e-beb1-0f4b5c004682',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e4d2861f-8d7e-474d-96a0-7d9ad1d7d6aa',
          'description' : '4',
          'price' : '390',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '697c4963-1e8e-4ccd-a2b3-004061303289',
          'description' : '4.5',
          'price' : '514',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5826bfb6-a076-4729-8df8-5ac07ec160e4',
          'description' : '5',
          'price' : '411',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c62ace90-427c-4bbb-98f5-b802f4bd798a',
          'description' : '5.5',
          'price' : '496',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c62574a0-713e-4513-850a-50472db2b19f',
          'description' : '6',
          'price' : '460',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '92c813f8-1669-48f9-8e83-bfc7dfd6070a',
          'description' : '6.5',
          'price' : '599',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a320e5e7-0dcb-4c1c-a23e-e3a0fd504e14',
          'description' : '7',
          'price' : '525',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e44c461d-8dc2-4416-80dc-9ba1c8c3a1cf',
          'description' : '7.5',
          'price' : '460',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd53cf5ab-5307-4ffa-a4fe-6b9761f70148',
          'description' : '8',
          'price' : '428',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '66a032c5-6f2c-4c8a-94a2-9ec5aba14164',
          'description' : '8.5',
          'price' : '402',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8a6ccfb1-5e4b-4c33-8ebc-719ce9bd59f3',
          'description' : '9',
          'price' : '380',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2880dcb8-3073-481b-a9b3-f4e8d9419e9b',
          'description' : '9.5',
          'price' : '424',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3fc38f07-2206-4dcc-874c-7ab9be937834',
          'description' : '10',
          'price' : '427',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7b16a1ad-b1c2-4ad6-951c-aca95ea53b31',
          'description' : '10.5',
          'price' : '428',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e3d518c1-bca2-4640-92e0-ce3894a57fa5',
          'description' : '11',
          'price' : '449',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '34425434-e1cf-454f-98de-3e2349eae426',
          'description' : '11.5',
          'price' : '475',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9c1eca99-e89d-49a5-8647-ab92b0432cdc',
          'description' : '12',
          'price' : '430',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1d3685ec-3877-49ea-a425-9419242ce5e8',
          'description' : '12.5',
          'price' : '515',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c30ee1c8-3c2b-417a-9571-288fd939d375',
          'description' : '13',
          'price' : '470',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '383367c3-6d0f-4590-a4f2-38c71205694c',
          'description' : '13.5',
          'price' : '585',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4e4cd096-0efb-4e1b-93a7-a06a2ab98efd',
          'description' : '14',
          'price' : '510',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '020b7883-a2c1-424a-906a-2ec77236388a',
          'description' : '14.5',
          'price' : '715',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '93ee132e-a31b-4128-b87f-5f52e622ad95',
          'description' : '16',
          'price' : '1400',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '163d5085-6bab-4990-bbb1-80d86d70b9c9',
          'description' : '--',
          'price' : '1200',
          'priceCurrency' : 'USD'
        }
      ]
    };
    // const pdt4 = {
    //   productName: 'Yeezy 350 v2 Zebra',
    //   brand: 'Yeezy 350',
    //   model: 'adidas Yeezy Boost 350 V2',
    //   color: 'Zebra',
    //   startDate: '2018-11-10',
    //   endDate: this.today,
    //   selectedSize: 0,
    //   skus: [
    //     {
    //       'sku' : 'e90e1888-61f0-4681-8379-a4706e4912352',
    //       'description': 'All',
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '7d15ee54-ce97-42c3-83df-98a6656048bb',
    //       'description' : '4',
    //       'price' : '398',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '82b24742-0e01-4a48-8422-4df99b4651e2',
    //       'description' : '4.5',
    //       'price' : '460',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'd9cb3ba8-35c7-457a-844c-9acf5bfd5893',
    //       'description' : '5',
    //       'price' : '430',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '1ef9f79e-31c7-4fad-bd4d-cb3858a685c4',
    //       'description' : '5.5',
    //       'price' : '482',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '4f789f31-8d8a-4013-90b9-94ac4bee8f08',
    //       'description' : '6',
    //       'price' : '465',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'bab0159f-06d2-41d0-8306-7a1a06a77df0',
    //       'description' : '6.5',
    //       'price' : '459',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '3e042194-417f-412b-9552-ad1f665f868b',
    //       'description' : '7',
    //       'price' : '389',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '624ceea1-0f4e-4274-9a0b-3559f2b33a59',
    //       'description' : '7.5',
    //       'price' : '380',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'e22c5bc6-d674-4f74-8e8d-15ee84635d9b',
    //       'description' : '8',
    //       'price' : '358',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '07c69548-8a79-427f-b3b2-14a3b0d463e8',
    //       'description' : '8.5',
    //       'price' : '370',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '1a9dbdef-e353-45d6-bf0c-4cabd0de2970',
    //       'description' : '9',
    //       'price' : '370',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'd729e1df-87ed-446c-a2e7-05546588f19a',
    //       'description' : '9.5',
    //       'price' : '364',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '71b50208-4e3a-4e94-8d10-1df2403317d5',
    //       'description' : '10',
    //       'price' : '374',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '6d7cf923-2108-4803-a587-4b56c74ce64b',
    //       'description' : '10.5',
    //       'price' : '360',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '95c64bfb-4630-4997-b483-91db97e21bd6',
    //       'description' : '11',
    //       'price' : '355',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '229a82bb-4f97-4841-bdd8-8c0045e26281',
    //       'description' : '11.5',
    //       'price' : '379',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '2dbc9765-a5f5-4221-8e4b-9ccccacb0fa5',
    //       'description' : '12',
    //       'price' : '350',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '6e2621b6-19b8-49a2-9bb3-586a1e4490af',
    //       'description' : '12.5',
    //       'price' : '460',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '52c06daa-0313-43d4-aaf3-bfeab05bf0ec',
    //       'description' : '13',
    //       'price' : '360',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '6eed4c77-ed79-4d8a-8023-75851e199508',
    //       'description' : '13.5',
    //       'price' : '561',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'e9634738-b218-406a-a0ae-57547ef04914',
    //       'description' : '14',
    //       'price' : '375',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : '793a1d6f-559f-4542-ae05-431a7ac492bd',
    //       'description' : '14.5',
    //       'price' : '515',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'f92ec7ac-2a88-4f75-9c07-7ea769e4ff46',
    //       'description' : '16',
    //       'price' : '723',
    //       'priceCurrency' : 'USD'
    //     },
    //     {
    //       '@type' : 'Offer',
    //       'availability': 'http://schema.org/InStock',
    //       'sku' : 'edc75dc4-318d-4ddb-908e-c323d3b3404c',
    //       'description' : '17',
    //       'price' : '849',
    //       'priceCurrency' : 'USD'
    //     }
    //   ]
    // };
    const pdt8 = {
      productName: 'Air Foamposite One Eggplant',
      model: 'Air Foamposite One',
      color: 'Eggplant',
      brand: '喷泡',
      startDate: '2017-07-29',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '331f565d-bd6f-4760-8f7d-76d3172b7508',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '12a1705a-fe48-4f49-84ff-f1988d515e0b',
          'description' : '8',
          'price' : '284',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ac94b86f-c9cb-4d79-8be6-706768012513',
          'description' : '8.5',
          'price' : '288',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b8fab9a4-597e-4c6e-95d5-4bf859144849',
          'description' : '9',
          'price' : '275',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a1112a15-c047-4e37-89f5-5efd314a0d1d',
          'description' : '9.5',
          'price' : '299',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '66fc9d82-0e9c-4d2a-8c05-a97f6d1086ef',
          'description' : '10',
          'price' : '275',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '87d75fa3-007a-4cb2-b212-0737f6f256d6',
          'description' : '10.5',
          'price' : '225',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd4db8ea7-a4f9-49fd-bfed-47ab336d10d0',
          'description' : '11',
          'price' : '259',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '911ed194-dd9e-4515-be1d-4e8610e0925a',
          'description' : '11.5',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '64725cca-1bb0-4ccf-a6f5-2165c27e5fec',
          'description' : '12',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '55880389-e423-4a6e-9aec-52c4e980d0fe',
          'description' : '13',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '26246902-74a8-4cd8-a291-9b020bb2c32a',
          'description' : '14',
          'price' : '295',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6cc5772c-45ff-44fe-9444-581c4fdd979c',
          'description' : '15',
          'price' : '248',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt9 = {
      productName: 'Air Foamposite One Rust Pink',
      model: 'Air Foamposite Pro',
      color: '脏粉/Rust Pink',
      brand: '喷泡',
      startDate: '2018-04-20',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '15fd1ee2-4fef-4824-adff-66d18d929baa',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9ceb95f4-7177-43d1-b981-7061d2e550e3',
          'description' : '--',
          'price' : '225',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '582cc0e8-7fb3-455b-98ce-2e14cc5afac4',
          'description' : '8',
          'price' : '203',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd6298101-1076-4766-9c1b-5cd3b9842ee3',
          'description' : '8.5',
          'price' : '197',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ad3af085-b66e-4b7d-8c43-f3546639aade',
          'description' : '9',
          'price' : '209',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ff441057-e05e-4f1a-b10c-077349c03b91',
          'description' : '9.5',
          'price' : '197',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fecd7bd5-ff58-40e8-9d77-de0fec7213ac',
          'description' : '10',
          'price' : '181',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bc0b4a06-0267-4a1c-a8de-5948c40aca44',
          'description' : '10.5',
          'price' : '179',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '03021f80-03d5-45cb-8685-e7508ee9b39f',
          'description' : '11',
          'price' : '167',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'edcfd7bf-bd3b-40ba-9044-3c449edf4afa',
          'description' : '11.5',
          'price' : '195',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a0c9836f-32a0-4fd2-8a12-b1fa92a44198',
          'description' : '12',
          'price' : '195',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a1ffea00-60fa-41a6-946d-79c51154a6db',
          'description' : '13',
          'price' : '224',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e3909ed3-1938-433d-9c54-898c98e5b443',
          'description' : '15',
          'price' : '200',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt11 = {
      productName: 'Kyrie 5 Concepts Ikhet',
      brand: 'Kyrie 5',
      model: 'Kyrie 5',
      color: '埃及/Concepts Ikhet',
      startDate: '2018-12-26',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'fe3f9dad-3c14-4e07-b842-ad9aa42ae995',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '940b87fc-907a-4fec-b45f-a2be964b9cc0',
          'description' : '7',
          'price' : '249',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '768e2cc4-93ac-48bf-b415-1503279acef8',
          'description' : '7.5',
          'price' : '275',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'effd2d96-8e22-4089-a72f-8ca5080427ba',
          'description' : '8',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3198be4d-86ec-49f6-9c07-11c202315394',
          'description' : '8.5',
          'price' : '186',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e8e42921-c4cb-47ee-a2d4-f7a51f36ca31',
          'description' : '9',
          'price' : '199',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a6b68396-0868-471c-ae08-cffbe20a82be',
          'description' : '9.5',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '682e4b9b-57a8-46f7-91be-8c69acd0f2de',
          'description' : '10',
          'price' : '193',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '043652a0-e286-4519-a497-db3bbb2aaafa',
          'description' : '10.5',
          'price' : '199',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ca3f62b2-49bb-4272-8ea1-e3a9b896e2a3',
          'description' : '11',
          'price' : '188',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e4ddbe15-3444-464d-9854-5cef001ef1fc',
          'description' : '11.5',
          'price' : '214',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '30089872-f856-495c-a052-b802ea71bfc0',
          'description' : '12',
          'price' : '198',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd9a41678-374a-4bef-af7d-eede7c1f31ab',
          'description' : '13',
          'price' : '231',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f200f5f7-cbcf-45dc-bf2c-85265670f1a8',
          'description' : '14',
          'price' : '194',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt12 = {
      productName: 'adidas Yeezy Boost 350 V2 Static',
      brand: 'Yeezy 350',
      model: 'adidas Yeezy Boost 350 V2',
      color: 'Static',
      startDate: '2018-12-27',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'fcdd291b-cd65-4e82-b57f-4ca2b478e153',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c94f5e2b-fd2c-46db-af71-5995eb74dc12',
          'description' : '3.5',
          'price' : '384',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '11475299-2852-4feb-b870-9edb216fb723',
          'description' : '4',
          'price' : '263',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7b3f2c88-b4d4-4b06-a433-e8601294049d',
          'description' : '4.5',
          'price' : '320',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '661e15a5-1c17-4975-a511-9c654bb44fa0',
          'description' : '5',
          'price' : '277',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8b0521e7-1170-4d4c-86e9-e0553f3449ff',
          'description' : '5.5',
          'price' : '310',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e6d80b59-1f13-4741-b7cb-2c6e7a7edf76',
          'description' : '6',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '036dde96-b2bb-4960-ba32-38ad7a051f31',
          'description' : '6.5',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '56f62f1b-d880-46db-ace5-e05f92c49390',
          'description' : '7',
          'price' : '289',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f819ad48-82fd-4172-970c-cfa8cbe3f1d4',
          'description' : '7.5',
          'price' : '275',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8dd5f76d-fea2-42bf-8ba3-072ea932f0df',
          'description' : '8',
          'price' : '279',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd38174c8-f8b2-42c7-a11d-8122c15f4b75',
          'description' : '8.5',
          'price' : '271',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'db10c8fc-b8e4-41c5-bb21-9822f812845e',
          'description' : '9',
          'price' : '257',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd458dea2-2383-45f9-8bce-935f3fb7545c',
          'description' : '9.5',
          'price' : '272',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '877515ce-ddb1-429a-bc13-ff96c1c17848',
          'description' : '10',
          'price' : '262',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bdd383b1-4818-4ce1-8bb4-759f65d2e17c',
          'description' : '10.5',
          'price' : '267',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ce2d6b38-e71d-426a-afeb-b0eae5c8d390',
          'description' : '11',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '010fc73c-fe27-4e63-ae69-df960a4a20d6',
          'description' : '11.5',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '50fbe7bc-2fab-4c58-bd17-0a803e2fa323',
          'description' : '12',
          'price' : '260',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '09c48751-570a-4163-9cf0-2efab6456b4d',
          'description' : '12.5',
          'price' : '275',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd8ecbd5f-5f93-4ec8-a27b-b4ec3e645a18',
          'description' : '13',
          'price' : '268',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1f7ceea7-6542-4005-aea4-aa2f3b752ba8',
          'description' : '13.5',
          'price' : '311',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3b0dd0ab-8a77-46d5-bade-03746196d4cd',
          'description' : '14',
          'price' : '296',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '385536f6-1e15-4854-b0c5-9854868b19bf',
          'description' : '14.5',
          'price' : '508',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c0726fc3-043d-47ae-a4cb-50130369258c',
          'description' : '16',
          'price' : '635',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt13 = {
      productName: 'Jordan 1 Retro High Spider-Man Origin Story',
      brand: 'Air Jordan 1',
      model: 'Jordan 1 Retro High',
      color: 'Spider-Man',
      startDate: '2018-12-14',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'c6b80f3e-2a46-46fe-a557-236eeb2d31d2',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd526f83f-aed5-41d7-89f7-c02ac37a5bc4',
          'description' : '4',
          'price' : '443',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '20427b47-6046-4f32-95e7-db8406ba5678',
          'description' : '4.5',
          'price' : '741',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e1f0d6ff-0dec-4047-8642-c9778c4da0bc',
          'description' : '5',
          'price' : '525',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cd1add15-225e-4989-9dcc-8832e08257c8',
          'description' : '5.5',
          'price' : '400',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a935bfb0-6be6-49a4-b47b-29dd96aacfc9',
          'description' : '6',
          'price' : '598',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8ba0c6ff-10ed-4081-ab97-d07a82933788',
          'description' : '6.5',
          'price' : '370',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '04e3cd99-8478-474b-ba24-f175c501b460',
          'description' : '7',
          'price' : '449',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a48eba8d-2d93-4ac4-aa9c-2827b6dd175d',
          'description' : '7.5',
          'price' : '455',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd557a0f8-26cd-4a3a-b070-763264aad560',
          'description' : '8',
          'price' : '430',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2b40846b-bb31-4111-a11b-cb802a4eccdd',
          'description' : '8.5',
          'price' : '432',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '06d65670-6726-476f-a826-86c6e33b1eff',
          'description' : '9',
          'price' : '425',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '633de577-a346-48de-8db2-bd59caea40bc',
          'description' : '9.5',
          'price' : '395',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd0ec7de9-f2a9-40a8-906a-585a95194c9d',
          'description' : '10',
          'price' : '335',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4f927107-47f7-4724-8a93-a0b6e4b1657a',
          'description' : '10.5',
          'price' : '304',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c2c824be-6900-4b1e-903e-dfe6746d3bc0',
          'description' : '11',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e8ea5dad-17d0-43b7-bae8-eb0cc9e2e58a',
          'description' : '11.5',
          'price' : '290',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2a803c5d-9a83-4741-9f53-cde4fad124be',
          'description' : '12',
          'price' : '274',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4f8b946b-dc54-4fbd-ac5b-078c9549ed4f',
          'description' : '12.5',
          'price' : '284',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7230253c-912c-4f2b-9cd3-90d5d07acd44',
          'description' : '13',
          'price' : '265',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '38104ac7-86b6-4d1e-9e8f-892bdccf234a',
          'description' : '14',
          'price' : '232',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '24f673ff-7453-4521-93fa-077b326218ee',
          'description' : '15',
          'price' : '240',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt14 = {
      productName: 'adidas Yeezy Boost 350 V2 Static Reflective',
      brand: 'Yeezy 350',
      model: 'adidas Yeezy Boost 350 V2',
      color: 'REflective',
      startDate: '2018-12-26',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'de269650-4228-4581-bdec-42a0dbb8f535',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0d72532b-980d-40c6-9f1f-a51329c910dc',
          'description' : '4',
          'price' : '495',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e5241cf9-16f2-4d47-a46c-c45ee095346d',
          'description' : '4.5',
          'price' : '512',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '69d7bbe8-edc6-4558-b5ce-40f2da7970df',
          'description' : '5',
          'price' : '499',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f3cc97a1-2717-4de2-89c0-2499e5d8198d',
          'description' : '5.5',
          'price' : '526',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '54bd102e-7be9-4c69-a604-34850d99e8ca',
          'description' : '6',
          'price' : '540',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd0b8dfe5-d52c-494e-9f78-dd78f6bf4b2c',
          'description' : '6.5',
          'price' : '624',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3debd4cb-1db3-4bf7-8d9c-6259af5c87e5',
          'description' : '7',
          'price' : '518',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b740ec50-cb83-4b0f-9c6d-e089058cb95d',
          'description' : '7.5',
          'price' : '530',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'efdc1071-fcba-496f-8c9d-b6898a55e76d',
          'description' : '8',
          'price' : '494',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '78bab0c0-aeba-4884-b821-e87445b90412',
          'description' : '8.5',
          'price' : '480',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1e4e5ac5-c345-4f44-b9cb-a061e63218fa',
          'description' : '9',
          'price' : '453',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4e77b0e8-89d8-4197-adae-48743a714d34',
          'description' : '9.5',
          'price' : '469',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4e4ee86b-b112-4ef7-8f86-e3ab3121bf33',
          'description' : '10',
          'price' : '449',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'af472ac2-cf54-4d99-90c8-bc5782329827',
          'description' : '10.5',
          'price' : '448',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0371b8ca-4e46-44dc-a4a8-5f7f103b08d1',
          'description' : '11',
          'price' : '543',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f694fb6c-7474-43dd-a7d3-769ff81f82aa',
          'description' : '11.5',
          'price' : '527',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '64d52e4f-4cb3-4149-a7fe-4699642cc3fa',
          'description' : '12',
          'price' : '404',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '925383dd-4fc4-4df0-aae6-a58186b93a80',
          'description' : '12.5',
          'price' : '420',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6f2d0047-4221-4a99-98eb-80dbdcc6e53e',
          'description' : '13',
          'price' : '447',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '226fc999-659e-4bef-85ee-cce4d0d0c94e',
          'description' : '14',
          'price' : '320',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '855afae8-1b60-49e5-807b-85f9d4c5e1b1',
          'description' : '--',
          'price' : '840',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c03244be-f791-4d12-a463-bcbedb756df3',
          'description' : '--',
          'price' : '2400',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt2 = {
      productName: 'air-jordan-1-retro-high-turbo-green',
      brand: 'Air Jordan 1',
      // 'brand' : 'Jordan',
      model: 'Jordan 1 Retro High',
      color: 'Turbo Green',
      startDate: '2019-2-15',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '507c1fbc-6386-444a-9112-67174a3fa820',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '87994128-0c82-49f0-8f23-a7a78dc08d63',
          'description' : '7',
          'price' : '338',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a6a9078f-f3cd-4087-9444-72af7213454a',
          'description' : '7.5',
          'price' : '309',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e287e16e-129d-4d85-bcf8-70cfba1f1ee9',
          'description' : '8',
          'price' : '288',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '75bf1c55-6e98-40a5-bc46-252395bf7dd1',
          'description' : '8.5',
          'price' : '285',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1bc015a2-ce47-41f1-946f-d7e52ae736aa',
          'description' : '9',
          'price' : '268',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f705fc94-8a68-49d4-9d59-56ee44ceccfa',
          'description' : '9.5',
          'price' : '256',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'abf6c122-7dd7-4f6f-ba59-02458d71445c',
          'description' : '10',
          'price' : '219',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '61f47167-7495-416f-8fa7-0beeb0857fbc',
          'description' : '10.5',
          'price' : '204',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7975e54e-b2a0-4e82-85f9-6aff73d0c8ad',
          'description' : '11',
          'price' : '198',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd0bdb281-027f-445f-a8b7-3545693f79cb',
          'description' : '11.5',
          'price' : '197',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ab79b74a-4922-4826-8706-5d2f412169b9',
          'description' : '12',
          'price' : '194',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '744d6ce9-0e2c-420b-be93-87cc770a0304',
          'description' : '12.5',
          'price' : '218',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3834bb0e-0ca2-4538-b950-5705017e4e3c',
          'description' : '13',
          'price' : '192',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8e8cd366-2b27-40df-900a-b757857018d7',
          'description' : '14',
          'price' : '203',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cd61c3c7-d866-4f2e-aef2-f1e115280d41',
          'description' : '15',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '755a86ed-daa0-4ccb-93bb-99bfe3e0635a',
          'description' : '16',
          'price' : '240',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b6acc693-019b-4301-b212-feb19d24363c',
          'description' : '17',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd4ec8903-0b32-4cac-8ef4-02012f7eaf97',
          'description' : '18',
          'price' : '199',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt15 = {
      productName: 'Kyrie 5 Taco',
      brand: 'Kyrie 5',
      model: 'Kyrie 5',
      color: 'Taco',
      startDate: '2018-11-16',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '17d0a251-ea39-4a02-b217-c6acd53d5d1c',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '21cf6696-b2e2-4d10-bf71-b82f2464b9d0',
          'description' : '--',
          'price' : '225',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '14d534ee-4770-41b2-bff7-8b08e20e56b7',
          'description' : '8',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9e39f888-a442-46fa-b60f-971d4e94b456',
          'description' : '8.5',
          'price' : '209',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '786dee0c-2b2d-4318-aaa5-eecf76356e33',
          'description' : '9',
          'price' : '280',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e6712339-5cf6-46ff-a3ac-8b786f62f1e1',
          'description' : '9.5',
          'price' : '195',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e15684cf-ad70-440c-95e6-178bf79e3203',
          'description' : '10',
          'price' : '179',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '23bfc5e8-85c4-4eab-8b71-b74723d15240',
          'description' : '10.5',
          'price' : '159',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1cc8fa5a-74db-4652-8825-3bf0678617bf',
          'description' : '11',
          'price' : '170',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bc737ee2-7332-49a3-87bc-568cf256b19c',
          'description' : '11.5',
          'price' : '155',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7030ba06-39e4-453b-b39f-a3c49ff36407',
          'description' : '12',
          'price' : '139',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ad02568c-d2db-4aa9-84c8-18c115b6665c',
          'description' : '12.5',
          'price' : '253',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6ce37dd7-3ffd-4f3e-925a-138639571fba',
          'description' : '13',
          'price' : '165',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '387f31c0-2466-4356-a436-be3ab5383425',
          'description' : '--',
          'price' : '249',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd597ea29-fd62-473f-9936-a63e81428906',
          'description' : '14',
          'price' : '158',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '167943ab-696b-4421-988b-6dcae39bb756',
          'description' : '15',
          'price' : '299',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b0c197fb-6296-4532-a43b-b5b2233b30ea',
          'description' : '--',
          'price' : '250',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt16 = {
      productName: 'Kyrie 5 BHM 2019',
      brand: 'Kyrie 5',
      model: 'Kyrie 5',
      color: '黑人月/BHM 2019',
      startDate: '2018-12-26',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '04e7746c-66cc-40a7-a496-84f402ca5f23',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd72d8ec0-84c6-43ea-a1b6-41b26c8c8682',
          'description' : '7',
          'price' : '184',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'df917e5e-3a64-4ee7-ab7a-5ea3340b0c3d',
          'description' : '7.5',
          'price' : '169',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bf627eea-35eb-4106-8344-b7aa3b0bb3b7',
          'description' : '8',
          'price' : '159',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2aa875af-e0a7-406d-ac86-dc1da1a6a26d',
          'description' : '8.5',
          'price' : '197',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c851ecd7-8dc7-40e4-95de-68d4ef9f31d0',
          'description' : '9',
          'price' : '170',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6bac8703-3f3a-4988-ae88-40cd66608567',
          'description' : '9.5',
          'price' : '170',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4562c808-d334-423e-93bd-b8cb6f0b1042',
          'description' : '10',
          'price' : '159',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'deca007a-01ac-4dba-a5d5-677e404e4de1',
          'description' : '10.5',
          'price' : '148',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7ed3066c-5ed4-4347-8e6b-d1307ea7af34',
          'description' : '11',
          'price' : '125',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '710a9138-2f8d-4ce6-8334-a130b158a30f',
          'description' : '11.5',
          'price' : '155',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '125ae1b2-192b-40e9-a698-e2861e2d05c2',
          'description' : '12',
          'price' : '144',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cc2f26e9-1931-4bde-a0f6-b0e13a2ae856',
          'description' : '12.5',
          'price' : '194',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a5bb138a-1c32-48a7-b003-d30821d8264b',
          'description' : '13',
          'price' : '159',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e884ddde-d436-405c-894f-fa73a3a4e481',
          'description' : '13.5',
          'price' : '199',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f23faaf0-b841-4262-b996-3bc3bedfb752',
          'description' : '14',
          'price' : '154',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt17 = {
      productName: 'Kyrie 5 Rokit',
      brand: 'Kyrie 5',
      model: 'Kyrie 5',
      color: '全明星/Rokit',
      startDate: '2019-02-16',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'c6210141-829c-478e-bc3d-61867b72470d',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '21a6c80e-ab34-4000-a977-4172ee95a05f',
          'description' : '7',
          'price' : '246',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cba02e01-01b5-4662-894d-73d137ac3f6e',
          'description' : '7.5',
          'price' : '274',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'dee3236b-b21d-4e31-9a15-a9132275b167',
          'description' : '8',
          'price' : '149',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ad46eb98-9ce8-42fa-9f56-5dcf25d733c6',
          'description' : '8.5',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2cbf8c39-d894-4332-aaff-e779e4e49862',
          'description' : '9',
          'price' : '175',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2d614fd9-eb1d-4a5b-a83b-a033088eb4b2',
          'description' : '9.5',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd41d53c1-8666-4b91-80f7-e30715b63078',
          'description' : '10',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f8b6b0d8-df31-4f25-a68a-253deba3b4cb',
          'description' : '10.5',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '225f4426-3863-469c-ba43-6ca1000a197b',
          'description' : '11',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a562bc9b-049d-45ca-924f-530c0b90f402',
          'description' : '11.5',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9a13a28a-95c3-43db-b7e2-f2e23ea35a58',
          'description' : '12',
          'price' : '150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e73fb5d8-1f7e-4ab6-af0d-889f0008c1f3',
          'description' : '12.5',
          'price' : '207',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5570cbaf-eae3-42a8-97e4-0d49d8422dcf',
          'description' : '13',
          'price' : '173',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c4fb9f51-e49d-4137-ade8-e02dc90852b3',
          'description' : '13.5',
          'price' : '282',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1d9e4a9f-ac3a-4ffe-9a0b-402d1cb74ce6',
          'description' : '14',
          'price' : '150',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt18 = {
      productName: 'Air Foamposite Pro Black Metallic Gold',
      model: 'Air Foamposite Pro',
      color: '黑金/Metallic Gold-Black',
      brand: '喷泡',
      startDate: '2018-11-17',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '820a5ad8-487c-4195-800d-a5870b6f5685',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd67ba7a5-8b8f-4105-9be3-a2a1651f520f',
          'description' : '7',
          'price' : '195',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '679eb434-eec2-45e5-b756-784ca7b3157d',
          'description' : '7.5',
          'price' : '240',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5224a9a1-2f2c-46b3-9441-20fa57420d86',
          'description' : '8',
          'price' : '193',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '97a46803-1b20-4edf-8d9b-8616da601f4b',
          'description' : '8.5',
          'price' : '190',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3fd21320-201c-4a15-8a62-35d49fc513ae',
          'description' : '9',
          'price' : '240',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '37fbca5f-22e9-4b68-9aad-228348b767d5',
          'description' : '9.5',
          'price' : '220',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '333814d9-9db2-4cc4-9114-f21a6087bed7',
          'description' : '10',
          'price' : '203',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '121fd02f-d2dd-48a2-a0b4-97fbb6834963',
          'description' : '10.5',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '910bf5f6-6981-4e37-83ae-f8c64eae9afb',
          'description' : '11',
          'price' : '210',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '97ff676a-a477-480d-80ca-598dc8986a8c',
          'description' : '11.5',
          'price' : '240',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '009c5a66-8f66-4c42-bbd7-799c431861ef',
          'description' : '12',
          'price' : '199',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '357d45ff-1b7f-424e-b18a-76bef4698277',
          'description' : '12.5',
          'price' : '210',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1017ad3f-ad42-4f8f-9360-f1847a595f57',
          'description' : '13',
          'price' : '215',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1522e8a4-76c6-409c-914a-7acf78132a69',
          'description' : '14',
          'price' : '270',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '02475cb1-1fae-42cf-9c1a-f727ca12cc51',
          'description' : '15',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e33c0a82-706d-4a36-a492-a624da100665',
          'description' : '--',
          'price' : '10000',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt19 = {
      productName: 'Air Max 90 OFF-WHITE Desert Ore',
      model: 'Air Max 90',
      color: 'Desert Ore-Hyper Jade-Bright Mango',
      brand: 'Off-White The Ten',
      startDate: '2019-02-07',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'c657c27a-39c7-49ae-b148-ad55998edfec',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '61cf46ca-c793-4a83-93b2-3d2a211d7f3d',
          'description' : '6',
          'price' : '458',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '483a0325-41a6-43a8-991c-9278139342fe',
          'description' : '6.5',
          'price' : '432',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4b070bfb-c4b8-4814-b2a3-b824fe35bc0e',
          'description' : '7',
          'price' : '444',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9ec875a7-faeb-4b1d-832b-b509fb5f3678',
          'description' : '7.5',
          'price' : '477',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '22bbaad4-1c16-4123-b979-e22156739983',
          'description' : '8',
          'price' : '530',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '424cad40-9ea0-491c-903f-7ae5bea92be9',
          'description' : '8.5',
          'price' : '517',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1b0f9a79-6244-46f1-aa3b-647c201e660b',
          'description' : '9',
          'price' : '534',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fae2f363-a320-4e49-9891-48f187a11eae',
          'description' : '9.5',
          'price' : '539',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b0ebe59c-5b09-41b3-a6c1-2cf8f8321389',
          'description' : '10',
          'price' : '524',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4f441a07-2f31-4945-ba6b-dee842e16a3e',
          'description' : '10.5',
          'price' : '528',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '100094bc-67f4-49a0-9434-d74947fbd0d0',
          'description' : '11',
          'price' : '527',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cfda8ab3-1254-43c0-bb93-b3c45787f424',
          'description' : '11.5',
          'price' : '527',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '28a56970-df33-4462-a94c-179da1bc510c',
          'description' : '12',
          'price' : '555',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'df1b88d5-2fee-4766-9a4e-9da5ef969845',
          'description' : '12.5',
          'price' : '950',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8f2dec60-cfe2-4356-a09b-547696687230',
          'description' : '13',
          'price' : '520',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c35ecb49-1018-4d17-955f-f8e0f5ba7b6f',
          'description' : '14',
          'price' : '590',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd96b33b2-9bbc-4193-bd24-c9d4f2dee808',
          'description' : '15',
          'price' : '595',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt20 = {
      productName: 'Air Max 90 OFF-WHITE Black',
      model: 'Air Max 90',
      color: 'Black-Cone-White',
      brand: 'Off-White The Ten',
      startDate: '2019-02-07',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'e84a0e22-714b-44db-a904-5299bc050802',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'dab40b4a-6f78-4637-b149-bc0bacf2c070',
          'description' : '6',
          'price' : '477',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '369a8639-5eb5-4ab7-9db4-fdfdebec5b30',
          'description' : '6.5',
          'price' : '458',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '62efc5d0-223d-46c8-b8f7-0ce667052d8f',
          'description' : '7',
          'price' : '465',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a8e55b02-af88-49e5-a0c6-05bd8ffc665e',
          'description' : '7.5',
          'price' : '494',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7d190db9-abba-411d-a6ab-4e8f6e1b1392',
          'description' : '8',
          'price' : '559',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1491d51c-2185-4420-960f-2be499c0324d',
          'description' : '8.5',
          'price' : '544',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ed448ea2-935b-4723-ac0d-e92f98f84609',
          'description' : '9',
          'price' : '551',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8fe0279f-947a-498b-8a54-00bdcc25c426',
          'description' : '9.5',
          'price' : '556',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c4f3a885-7480-43c3-a904-2ca38a07c7e9',
          'description' : '10',
          'price' : '555',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4088a3b3-01d8-4ffd-ac82-83b2b095b8c6',
          'description' : '10.5',
          'price' : '543',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f023305a-7826-47bd-8151-a3961f825acd',
          'description' : '11',
          'price' : '532',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ead2a9c7-0ff8-4b0d-8347-1f1532135f18',
          'description' : '11.5',
          'price' : '565',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '53998973-6258-4edc-a1a5-dde5329ddad5',
          'description' : '12',
          'price' : '564',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '350ffb8a-29bb-4e38-b6f2-877063a2169e',
          'description' : '--',
          'price' : '2000',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8a911833-97f5-4672-aaf5-3928e6148992',
          'description' : '13',
          'price' : '560',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0d85fb12-33b3-4f66-a102-eeaf1ac04e57',
          'description' : '14',
          'price' : '575',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f7d1d30e-2226-4c69-8eb5-404ff95b92fa',
          'description' : '15',
          'price' : '560',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt21 = {
      productName: 'Air Max 97 Off-White Black',
      model: 'Air Max 97',
      color: 'Black-Cone-White',
      brand: 'Off-White The Ten',
      startDate: '2018-10-18',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'a7e531ee-cfa0-4a91-a343-ad531b95aa45',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '58644676-c368-420c-9923-009bf7c6a629',
          'description' : '--',
          'price' : '1350',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '53222391-ba29-480f-99b9-622c8d6d1e22',
          'description' : '4.5',
          'price' : '695',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b6aadc76-8216-49da-a2c2-2ace567104fb',
          'description' : '5',
          'price' : '895',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5c625d5d-6f6a-4840-9a1e-e8c78e42aff3',
          'description' : '5.5',
          'price' : '1200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '767661fe-a9ef-429a-9f69-257967edf40f',
          'description' : '6',
          'price' : '777',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f200bbe1-410b-4f42-81cb-e3da1f39ea7d',
          'description' : '6.5',
          'price' : '750',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ce7d2026-e692-4d61-9ce7-b4e0d781f1e5',
          'description' : '7.5',
          'price' : '850',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0e53cd99-cede-43d2-b3dd-68a3c8995180',
          'description' : '8',
          'price' : '884',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '60ed1e72-8bd5-4a27-9e04-632bbe5e3dc7',
          'description' : '8.5',
          'price' : '899',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '16d542a8-8c4f-4782-aebe-a9638f46efaf',
          'description' : '9',
          'price' : '900',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '723db301-cc54-4273-b01f-826b22905bff',
          'description' : '9.5',
          'price' : '994',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b348280e-a115-40e8-92a8-a5551b96beac',
          'description' : '10',
          'price' : '810',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9d02717f-c5fe-45ad-98a8-7321fb6838ba',
          'description' : '10.5',
          'price' : '795',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '910f6641-d219-4ed4-b395-607be58d251a',
          'description' : '11',
          'price' : '874',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a9572c9c-9864-4e89-8b26-4a50b4cb0ba3',
          'description' : '11.5',
          'price' : '925',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ede448b5-98e2-4379-8909-077bc663ee73',
          'description' : '12',
          'price' : '1000',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '84142f61-86ef-4a46-8154-f2913ecb1faf',
          'description' : '13',
          'price' : '745',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4073c6dd-ae54-4b74-81a9-f4fcba5dd503',
          'description' : '14',
          'price' : '1000',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5e16dce1-5009-45d1-88d9-3c16906d378f',
          'description' : '15',
          'price' : '699',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt22 = {
      productName: 'Air Max 97 Off-White Elemental Rose Serena',
      model: 'Air Max 97',
      color: 'Elemental Rose/Black-Barely Rose-White',
      brand: 'Off-White The Ten',
      startDate: '2018-08-25',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'f765d675-930e-4d44-839b-3ffd3f760630',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '62640dfb-9560-4ced-b879-df00d30216e5',
          'description' : '4',
          'price' : '1898',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '355a0aed-489b-418b-abbe-71a6fcccca7c',
          'description' : '4.5',
          'price' : '1216',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '10b9c6f9-2cb9-4f74-ba41-7a7147b3b6fe',
          'description' : '5',
          'price' : '1600',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '39d3f49a-fa1c-4e0d-b1ca-60d81c97b377',
          'description' : '5.5',
          'price' : '1450',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c7867b02-828b-4b35-ba58-1b6a1d0087df',
          'description' : '6',
          'price' : '1100',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e8271b3e-0b17-4ad1-ad0d-e03ea9ee0a23',
          'description' : '6.5',
          'price' : '1150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '885a6602-0e97-4b02-b059-c02a4700df30',
          'description' : '7',
          'price' : '1462',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '853d37ac-e564-4777-bcd3-22bbd6ead5ba',
          'description' : '7.5',
          'price' : '1150',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '95ac8f82-bb2c-4a7c-89c2-9e35a638ae66',
          'description' : '8',
          'price' : '1595',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '13d83f87-b4d1-40a2-93f4-d1b03bd41f21',
          'description' : '8.5',
          'price' : '1200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bd9fd1ed-cd19-4a48-ab49-ee18ebe24be4',
          'description' : '9',
          'price' : '1250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7e8fd325-7788-4f55-93e7-1a7716a45245',
          'description' : '9.5',
          'price' : '1065',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cb3ff9b1-57cf-4abc-aacb-550f2f305b60',
          'description' : '10',
          'price' : '1085',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '48e8728b-0a96-493a-88bb-f7d6615ab1f4',
          'description' : '10.5',
          'price' : '1049',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ce397f8d-5482-476c-8a6f-16dbbf0aefc0',
          'description' : '11',
          'price' : '984',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '23aa59ba-0ea8-4d0d-a96e-08410fc7fd4c',
          'description' : '11.5',
          'price' : '914',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c18e07e6-0f6c-46eb-9a14-19fd7db5f2ff',
          'description' : '12',
          'price' : '950',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fc8217fd-f969-4c91-8284-1a2c2a256e03',
          'description' : '13',
          'price' : '1000',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '135e3501-3815-4cc7-ad74-0e16203b166f',
          'description' : '14',
          'price' : '890',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '52242a01-3870-4164-a026-15d3746305ad',
          'description' : '15',
          'price' : '930',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt23 = {
      productName: 'Air Max 97 Off-White Menta',
      model: 'Air Max 97',
      color: 'Menta-Wolf Grey-White',
      brand: 'Off-White The Ten',
      startDate: '2018-10-18',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '6d9004b6-f8dd-442b-82d5-7f901f3e0221',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5862be88-aa6a-4776-a80a-b8e0c97e8716',
          'description' : '4',
          'price' : '745',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0d894733-d8da-406d-852e-11bcfc9dc2e6',
          'description' : '4.5',
          'price' : '700',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9721a6b4-4d76-4cd7-8d97-19c0e5255fc8',
          'description' : '5',
          'price' : '700',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b57d4195-ae46-4d5c-9bfb-16ce46a0e5f4',
          'description' : '5.5',
          'price' : '794',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd64466b2-1448-47f0-967d-ec419ad6b029',
          'description' : '6',
          'price' : '704',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e0074827-8239-4a55-8a56-26418677b530',
          'description' : '6.5',
          'price' : '750',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a5672eb3-e1e0-4963-9751-63f2a3fb02ac',
          'description' : '7',
          'price' : '780',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'da39c09e-cb54-44ed-88db-c1a4746ab995',
          'description' : '7.5',
          'price' : '880',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '31f5a2a1-b667-476e-8ae3-c7c3854d45fd',
          'description' : '8',
          'price' : '720',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0be111e1-81a3-4d08-a799-4002573d5df8',
          'description' : '8.5',
          'price' : '706',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b5b07001-6c64-4863-a7f5-169a72c5ab95',
          'description' : '9',
          'price' : '712',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '271b2b23-00ed-4122-a1e2-59ec83cab4f9',
          'description' : '9.5',
          'price' : '725',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '04346c9a-7c5b-4ead-85ca-a06aff797228',
          'description' : '10',
          'price' : '748',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6187a9dd-0f7c-460b-8630-8e0d85fb6c2c',
          'description' : '10.5',
          'price' : '760',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c96009a6-f121-4417-9656-78a58bb7d8bb',
          'description' : '11',
          'price' : '749',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fc12c378-266d-4063-9849-701d57f9d913',
          'description' : '11.5',
          'price' : '843',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c5f4fb70-2804-4b5a-bda7-ae45d06808f0',
          'description' : '12',
          'price' : '936',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '658dc2ad-54e1-487e-8acd-3a6466fb2997',
          'description' : '12.5',
          'price' : '100000000',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2cd0cea4-96ff-4801-8c4a-0d15d9fa4397',
          'description' : '13',
          'price' : '1237',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt24 = {
      productName: 'Air Max 97 Off-White White',
      model: 'Air Max 97',
      color: 'White/Cone-Ice Blue',
      brand: 'Off-White The Ten',
      startDate: '2017-11-01',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'f1261aed-e378-40dd-b958-822078dbe500',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a3db0889-3c81-4f47-98a1-7ba8dd9fc7e7',
          'description' : '4',
          'price' : '2250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '31364c16-5995-4a84-afc2-1a3dc7d4f680',
          'description' : '5',
          'price' : '1960',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e779a66c-6ea5-47e6-90f0-bf6c642f884d',
          'description' : '6',
          'price' : '1588',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '97086ea1-c47a-43d5-bb7b-ca0873f8b63b',
          'description' : '7',
          'price' : '1363',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '324ec39a-42cd-4e99-9a8d-ac1322f2cc11',
          'description' : '7.5',
          'price' : '1435',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '60f13f2d-c812-408d-834f-6f0bac5da91d',
          'description' : '8',
          'price' : '1005',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '98bb1b03-8b37-42c6-8680-7c10778731ed',
          'description' : '8.5',
          'price' : '1100',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b3700cd6-1cb1-4067-871b-a9c4f6986a9d',
          'description' : '9',
          'price' : '1124',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '84701c3e-1237-4594-90dc-0cde68f369ef',
          'description' : '9.5',
          'price' : '1998',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5faced2a-e3f4-4e87-9b7a-b43f08382abe',
          'description' : '10',
          'price' : '990',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4a6417fc-4fc5-432e-b10e-d59b1ebe8d57',
          'description' : '10.5',
          'price' : '975',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f05c50c4-1324-4a0f-b5d9-e33f41999777',
          'description' : '11',
          'price' : '910',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '018e078e-f660-42ce-8aaf-d68b8a3133d3',
          'description' : '11.5',
          'price' : '875',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8c3f5e84-9148-4f56-9a6b-0c8625a7b9c6',
          'description' : '12',
          'price' : '998',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8fa2cd13-60b5-486e-8586-687870172d13',
          'description' : '--',
          'price' : '950',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '44ee5d4f-f229-4b53-8239-371374ab084f',
          'description' : '13',
          'price' : '820',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt26 = {
      productName: 'Jordan 1 Retro High OG Defiant Couture',
      brand: 'Air Jordan 1',
      // 'brand' : 'Jordan',
      model: 'Jordan 1 Retro High OG Defiant',
      color: 'Black/Gym Red-Muslin',
      startDate: '2019-02-23',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '15fe7929-f962-4009-9912-a6534ed5babd',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '86779229-5699-42f6-9227-493f480b779f',
          'description' : '7',
          'price' : '308',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '70d3c5e5-55d0-4cc9-b5e9-022ddab4ea4b',
          'description' : '7.5',
          'price' : '323',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f12f48b1-8894-4d1d-9677-6f4581aea84f',
          'description' : '8',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b57cea28-8f4b-4043-ad7f-d3827101f6af',
          'description' : '8.5',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'dae30d0d-3224-415f-a988-06bd7c189232',
          'description' : '9',
          'price' : '245',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cae8cda8-5470-4e07-ad94-a29828a5b08d',
          'description' : '9.5',
          'price' : '223',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b68ac6d8-269f-4212-93cb-b5d26a577fc4',
          'description' : '10',
          'price' : '205',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '41af5001-bf88-4edc-8f7d-a87c9f037a7a',
          'description' : '10.5',
          'price' : '197',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '87b0d396-c70f-4e83-b3ab-4b8b67a27edd',
          'description' : '11',
          'price' : '192',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8f2e49f3-2b10-4b70-849e-177abf43416f',
          'description' : '11.5',
          'price' : '190',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '898654ea-7bf1-47dd-97b6-b4021ba01fc5',
          'description' : '12',
          'price' : '190',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ce3ab730-cf90-43cc-a1e6-5505149a377b',
          'description' : '12.5',
          'price' : '245',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3c3b1aa1-550c-4b25-bc8b-d8814feac594',
          'description' : '13',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '46d8fc25-56d1-425c-a6d7-546954104c07',
          'description' : '--',
          'price' : '291',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8605eddf-443a-4627-8b63-090b1d1b9a80',
          'description' : '14',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c8ce9d8e-f9c1-4e5c-9b05-45c9c43d541b',
          'description' : '14.5',
          'price' : '410',
          'priceCurrency' : 'USD'
        }
        ]
    };
    const pdt27 = {
      productName: 'Jordan 1 Retro High Rookie of the Year',
      brand: 'Air Jordan 1',
      // 'brand' : 'Jordan',
      model: 'Jordan 1 Retro High',
      color: '新秀/Golden Harvest/Black-Sail',
      startDate: '2018-11-17',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '65ed1433-cc81-4bc6-a6eb-576ebb3ccc42',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7d9cb2bd-aa3b-4ae8-a745-ffde8517c969',
          'description' : '3.5',
          'price' : '490',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '547c1b5b-f611-43b4-a558-2fc4c3a0cac1',
          'description' : '4',
          'price' : '365',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '30a75c3e-bf3d-4fc7-b095-3936ad70d43a',
          'description' : '4.5',
          'price' : '420',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fbf044c9-80d2-4e02-92ab-718538c12bc9',
          'description' : '5',
          'price' : '350',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0c8e78e2-a807-4d76-848a-39f96728d201',
          'description' : '5.5',
          'price' : '320',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '413565e3-7c29-4d19-a487-6c3489c39542',
          'description' : '6',
          'price' : '317',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2fd19ff7-10c8-4de7-93c4-e2fa6fa6c167',
          'description' : '6.5',
          'price' : '304',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '28fe39d8-40c9-410a-af0a-d236b0ca8b1c',
          'description' : '7',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'feca16d8-0d2d-44da-ae2b-b8ca37dbfe4d',
          'description' : '7.5',
          'price' : '297',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '463d4099-7e8a-4945-87d3-61d6a060918d',
          'description' : '8',
          'price' : '299',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a33afa53-8b8f-49ff-844a-107ddcb85986',
          'description' : '8.5',
          'price' : '296',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a09e2d7f-736d-4164-ae17-46e7b35932ec',
          'description' : '9',
          'price' : '269',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd4e04ba2-1f0c-49e0-9a8c-591318729665',
          'description' : '9.5',
          'price' : '265',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd5475dd2-3dac-4e8c-bd4e-f2a1e32160cc',
          'description' : '10',
          'price' : '229',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '40b46da8-4c10-4484-8797-79f514a69e90',
          'description' : '10.5',
          'price' : '210',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8ff62341-d129-4e1d-aee8-f968116593cf',
          'description' : '11',
          'price' : '205',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e80af4d1-2197-43ef-94ec-5f36d02efe49',
          'description' : '11.5',
          'price' : '200',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '20e345f3-f84d-419f-916f-324b50cd3b17',
          'description' : '12',
          'price' : '198',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '173d7ca1-f751-4b42-9c40-3dabd0c2c749',
          'description' : '12.5',
          'price' : '190',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2a809150-32f0-4486-b12c-be8ef5688f3a',
          'description' : '13',
          'price' : '192',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '04889bf2-9557-4368-a287-44ac5f530478',
          'description' : '14',
          'price' : '187',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7711c92e-553e-4c11-967f-c7975131dcc6',
          'description' : '15',
          'price' : '180',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '493c3bde-2c65-431a-8f56-6feebc96867d',
          'description' : '16',
          'price' : '398',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '97ea79e8-fa69-4a8f-ac1e-8681f9ca046f',
          'description' : '17',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f5fcbf84-d0c5-413b-ae69-e795393af92a',
          'description' : '18',
          'price' : '200',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt28 = {
      productName: 'Jordan 1 Retro High Sports Illustrated',
      brand: 'Air Jordan 1',
      // 'brand' : 'Jordan',
      model: 'Jordan 1 Retro High',
      color: '体育画报',
      startDate: '2018-12-27',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '26698769-9304-48fb-a946-e637b2ba58a6',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e6decbbc-664e-45e3-a1f9-bc133c5e1b28',
          'description' : '7',
          'price' : '285',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2c4b45dd-5708-4999-9e79-252e013049b9',
          'description' : '7.5',
          'price' : '279',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bb6dcead-41f3-45fc-882b-c8f2cff89e1b',
          'description' : '8',
          'price' : '264',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f8ea0c20-b446-4f24-a332-70e53692e0ff',
          'description' : '8.5',
          'price' : '249',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9865832d-b9d8-44fe-97e5-0aa8eba20974',
          'description' : '9',
          'price' : '233',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '66739bbe-df24-434e-b2bc-736d5a191288',
          'description' : '9.5',
          'price' : '220',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0ec592b0-7588-4df9-95b2-40669dbcbb45',
          'description' : '10',
          'price' : '182',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c5189445-c2bc-4cf6-994a-9d7a90e42388',
          'description' : '10.5',
          'price' : '163',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1c399e9f-e34e-462f-ae8f-f5f1cf32e8b2',
          'description' : '11',
          'price' : '156',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '27ef6c46-1a7f-4905-9e58-53e8a3177e77',
          'description' : '11.5',
          'price' : '145',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3b72df86-4916-4faa-bd8e-89e8405a5c5c',
          'description' : '12',
          'price' : '147',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ebf8f809-9b6f-43b8-8cd2-6c3126fb1942',
          'description' : '12.5',
          'price' : '153',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fdf14aa5-ffdd-40b5-ab68-682aa65ecbff',
          'description' : '13',
          'price' : '135',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '08d528f9-4dc6-4e6f-8b73-22a0c2c5fc42',
          'description' : '14',
          'price' : '135',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '00fc160f-7958-46d4-b89f-f74b60bbaa9e',
          'description' : '15',
          'price' : '135',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1906c8c7-c979-4f99-bc5c-07ed7fe44523',
          'description' : '16',
          'price' : '160',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b2a568dd-d16b-4daa-a9ae-f8af47314845',
          'description' : '18',
          'price' : '170',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt29 = {
      productName: 'Jordan 1 Retro High Neutral Grey Hyper Crimson',
      brand: 'Air Jordan 1',
      // 'brand' : 'Jordan',
      model: 'Jordan 1 Retro High',
      color: '灰麂皮/Neutral Grey/Black-Hyper Crimson-White',
      startDate: '2019-01-24',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'e3807016-ae5c-46f2-9c48-ba3357508fd1',
          'description' : 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b67c6b92-32d6-4ca4-8e25-2f7339e243d6',
          'description' : '7',
          'price' : '338',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4e2b8f95-1bb7-45b1-9b7c-4c0458ae3a33',
          'description' : '7.5',
          'price' : '289',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd40b8ed1-3719-47a6-9229-b00eaee12a6d',
          'description' : '8',
          'price' : '272',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '678b1aed-b89a-42e7-9536-81e681acc4df',
          'description' : '8.5',
          'price' : '254',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '227a1ce4-ab60-4fdd-995b-24a3177ccd1e',
          'description' : '9',
          'price' : '239',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8745c65d-d9df-4115-8404-47a0eb0fdfc4',
          'description' : '9.5',
          'price' : '228',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '189fb981-9220-4d52-aed0-4deea803a75d',
          'description' : '10',
          'price' : '192',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2baadef5-ebe1-4eee-8ada-e849cffd6ff1',
          'description' : '10.5',
          'price' : '180',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9d278211-e81e-457b-8039-f8a51656444e',
          'description' : '11',
          'price' : '180',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8c3b03e3-d3ad-49d1-935b-5d39708ada6c',
          'description' : '11.5',
          'price' : '172',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b63fb0cf-d900-46ea-ac99-15b763be1fe5',
          'description' : '12',
          'price' : '170',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4595bfc1-de83-412c-8f7d-9b27feb77339',
          'description' : '12.5',
          'price' : '177',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '08a0f1de-e0d0-40af-9276-cf47b0aff6aa',
          'description' : '13',
          'price' : '165',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fe19426f-2e91-4553-8f2c-5cc1027c9260',
          'description' : '14',
          'price' : '169',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bf55cb4c-6ead-4380-abfb-1a47cbd43898',
          'description' : '15',
          'price' : '180',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '84695669-5b85-4c19-82ad-f18d0d22eb68',
          'description' : '16',
          'price' : '172',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd847d839-c3aa-4c91-9513-5561c0308486',
          'description' : '17',
          'price' : '175',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fe5b22fe-8421-476d-9503-24b5c81c100c',
          'description' : '18',
          'price' : '180',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt30 = {
      productName: 'adidas Yeezy Boost 350 V2 Trfrm',
      brand: 'Yeezy 350',
      model: 'adidas Yeezy Boost 350 V2',
      color: 'Trfrm',
      startDate: '2019-03-16',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'e2b9e006-6c72-49ad-b7a3-bedc99d1d361',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '62e59ca8-4144-47cb-b66f-85e3b3cde78e',
          'description' : '4',
          'price' : '475',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '05de8723-0191-4bac-abda-6bc8339e8c02',
          'description' : '4.5',
          'price' : '493',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'fd1a3900-05c4-4c72-9116-9231f1e5de69',
          'description' : '5',
          'price' : '492',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '6a4a8ad9-6037-41f6-be5e-b0ff88f173a7',
          'description' : '5.5',
          'price' : '493',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1d2bc460-1b6d-46fc-93f6-48962b00f0fa',
          'description' : '6',
          'price' : '493',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b68c797c-37a4-40d1-bd46-f3eefacafda1',
          'description' : '6.5',
          'price' : '448',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f498190d-9cb0-492f-9509-1d77c66deece',
          'description' : '7',
          'price' : '419',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '4f509c70-1568-4be7-a4ad-3f0fbf4fae7e',
          'description' : '7.5',
          'price' : '411',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '97ac5fe1-f2cf-4404-817f-3f9697935909',
          'description' : '8',
          'price' : '416',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cc126932-4b42-4459-beaa-991fb4d72bd4',
          'description' : '8.5',
          'price' : '418',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c8c7f59c-d0c5-4b7a-8445-bae3b7aad867',
          'description' : '9',
          'price' : '425',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '57afdf1d-6054-4caa-b1c0-10d5cc8067a6',
          'description' : '9.5',
          'price' : '422',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e16419ef-a0be-4d42-a348-4bea025124eb',
          'description' : '10',
          'price' : '414',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ad27f280-e467-472d-aac1-4765a6b5d8ba',
          'description' : '10.5',
          'price' : '402',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0f3c0165-0b08-4aeb-9148-f9f3e74abeeb',
          'description' : '11',
          'price' : '403',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ab22a5a1-ae90-4fd6-8363-7ea6f4460536',
          'description' : '11.5',
          'price' : '378',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a8a8c3e1-70f7-412c-a260-da010ab014a6',
          'description' : '12',
          'price' : '390',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd0880ed9-5c05-4cb4-b80f-0b3a6186526b',
          'description' : '12.5',
          'price' : '376',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bc80eea6-be9c-4c31-8221-b10aeb463c7b',
          'description' : '13',
          'price' : '372',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'bae03457-2185-4921-a7f7-6224d411ddac',
          'description' : '13.5',
          'price' : '356',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8c934d77-8468-4c7d-ab29-7a7e1ce6ee94',
          'description' : '14',
          'price' : '365',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '1da3c82f-e50b-44d4-bcb0-0325d8674a5f',
          'description' : '14.5',
          'price' : '538',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt31 = {
      productName: 'adidas Yeezy Boost 350 V2 Hyperspace',
      brand: 'Yeezy 350',
      model: 'adidas Yeezy Boost 350 V2',
      color: 'Hyperspace',
      startDate: '2019-03-16',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'b460e68b-8639-4555-8c60-7fc51bec7e13',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'f1e5855b-4cc2-4558-b838-9fdc72605c20',
          'description' : '4',
          'price' : '540',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0c5b7fa7-e42d-4b19-9a1c-7d24ce7110db',
          'description' : '4.5',
          'price' : '569',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c4e1ced4-2180-4581-bf89-569fa8be5f63',
          'description' : '5',
          'price' : '520',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ecdb44db-4692-4957-b385-0ba568720bcf',
          'description' : '5.5',
          'price' : '550',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '11c2891d-4695-43f3-ab3f-68d831d915ea',
          'description' : '6',
          'price' : '520',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '524d800b-1f7e-4be4-8994-f769a2ca12ba',
          'description' : '6.5',
          'price' : '512',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '463e7647-9a9c-4fb7-ad33-25b5dbd42bc1',
          'description' : '7',
          'price' : '438',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7deabced-46c5-4e05-ba9f-5b37e91fb33e',
          'description' : '7.5',
          'price' : '425',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '19e1d73e-7cae-4756-814c-a4672a2ed3fb',
          'description' : '8',
          'price' : '430',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ac06e1f3-fbd2-469a-b9ff-5bc4ae7e9c39',
          'description' : '8.5',
          'price' : '423',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd371c2ed-6b02-4702-bf88-6113c22e51d4',
          'description' : '9',
          'price' : '425',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c43c99a1-e382-4f40-bb83-66cb2ec4a041',
          'description' : '9.5',
          'price' : '440',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'd2b072b5-1cd0-475e-8680-0c5a5b1a9e16',
          'description' : '10',
          'price' : '434',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '8dd9ef4c-bad8-4fda-8ee7-23e104a55755',
          'description' : '10.5',
          'price' : '435',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '79c75b83-2862-4a6e-9219-51951e326ed4',
          'description' : '11',
          'price' : '464',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a5e6ca13-bf4f-461c-beb5-09863f8667cd',
          'description' : '11.5',
          'price' : '485',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a52a064e-02ae-4e56-96d3-cd3d09bc32dd',
          'description' : '12',
          'price' : '499',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '64bb9056-332c-451f-8372-5a086ee8a924',
          'description' : '12.5',
          'price' : '485',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ac239116-5ab1-4167-8dcb-d5479c8bfe44',
          'description' : '13',
          'price' : '450',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b982cd49-4c9d-4411-8c34-81dde05fc6e5',
          'description' : '13.5',
          'price' : '99999',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a7bd7b02-41c3-49ef-8785-35b9d8e70c8b',
          'description' : '14',
          'price' : '2800',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt32 = {
      productName: 'adidas Yeezy Boost 350 V2 Clay',
      brand: 'Yeezy 350',
      model: 'adidas Yeezy Boost 350 V2',
      color: 'Clay',
      startDate: '2019-03-30',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : '53b933ec-9b64-43a2-9d08-2a8bec05e364',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '25f09673-ae9e-466f-b437-436484d9e00a',
          'description' : '4',
          'price' : '1000',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '84b84eff-4354-4367-9731-470ae20ce3da',
          'description' : '4.5',
          'price' : '1055',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b06b78f4-f0cf-4965-8dd2-928eec1333ee',
          'description' : '5',
          'price' : '900',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'cebca74b-20f6-41d9-b51a-93ef101ac247',
          'description' : '5.5',
          'price' : '1120',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a0059411-37dd-4512-b81e-d394450f085d',
          'description' : '6',
          'price' : '950',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b0c422aa-1a81-4d5b-a860-76c16c02f12f',
          'description' : '6.5',
          'price' : '1100',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a7b45c7c-8f2e-4ef9-b1d2-66ea45ede816',
          'description' : '7',
          'price' : '970',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2289f603-b5d5-4ac7-b4f4-740d1bbc5009',
          'description' : '7.5',
          'price' : '950',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '2b004804-baf0-4ff6-8694-cf5c4eca0052',
          'description' : '8',
          'price' : '665',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '68c8ce96-4b58-47d8-bd90-9fe6b1bde48f',
          'description' : '8.5',
          'price' : '650',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'e6c4df7e-a562-4bf8-8308-4530ef243ebb',
          'description' : '9',
          'price' : '698',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '3eb45c3e-ca25-4a81-9707-36e153f427a3',
          'description' : '9.5',
          'price' : '685',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '578e9668-d8ee-41b2-bf21-f5d7526f6c77',
          'description' : '10',
          'price' : '610',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '450169a9-cf2b-436a-9037-847c4dce2f9c',
          'description' : '10.5',
          'price' : '655',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '62ae30c6-8100-4805-ade4-89206e2bf111',
          'description' : '11',
          'price' : '724',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '88f7d2cf-5ca2-4c02-a8e3-97272817d7ba',
          'description' : '11.5',
          'price' : '680',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '23a61c8b-1fdd-4641-86b5-b5d36f0eecde',
          'description' : '12',
          'price' : '730',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '851f31a6-345a-47e9-a610-fe34d7990e9f',
          'description' : '--',
          'price' : '900',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'afcad0a2-158b-4090-af58-6bfd9c43b789',
          'description' : '13',
          'price' : '875',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '9893b5ca-b141-4910-b8fe-2eeda27e7cd4',
          'description' : '13.5',
          'price' : '700',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a78642ad-0d63-46e2-88de-314d53b0462d',
          'description' : '14',
          'price' : '850',
          'priceCurrency' : 'USD'
        }
      ]
    };
    const pdt33 = {
      productName: 'Air Foamposite Pro All-Star (2018)',
      model: 'Air Foamposite Pro',
      color: 'All-Star (2018)',
      brand: '喷泡',
      startDate: '2018-02-15',
      endDate: this.today,
      selectedSize: 0,
      skus: [
        {
          'sku' : 'eb3d9e82-1a23-4981-ab11-9ff78388d8f8',
          'description': 'All',
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b0e628b2-f6ac-45fb-b835-3c855c6ec948',
          'description' : '7',
          'price' : '375',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '85687147-9391-4d0c-a20f-69355f738c04',
          'description' : '8',
          'price' : '295',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '7c1362a4-bd1f-45fa-a8ce-c8f0ad2169e3',
          'description' : '8.5',
          'price' : '305',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '27744195-68d4-442e-a4dc-b7a65e7c56aa',
          'description' : '9',
          'price' : '310',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '51c5e994-f81d-413b-a043-df59faec9452',
          'description' : '9.5',
          'price' : '315',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'db9c8a97-51fe-4963-96d7-8f557089ce88',
          'description' : '10',
          'price' : '270',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'a3a4feb2-6b66-4339-8ad4-d0eb1e927d5f',
          'description' : '10.5',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'c2925c3b-2cc4-4da8-b3dc-621ec5261744',
          'description' : '11',
          'price' : '250',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'b163d4b8-a13f-4148-a0d6-39b9bfe1a667',
          'description' : '11.5',
          'price' : '248',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '594217bc-2a6f-4eaa-b6f7-c99a18be87f2',
          'description' : '12',
          'price' : '239',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '0f3792b0-43a1-4b2b-969e-eea10f2eb351',
          'description' : '12.5',
          'price' : '300',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '722e018c-98e6-4a18-b62f-21923bceaf9b',
          'description' : '13',
          'price' : '220',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : 'ec06a892-9f6a-4139-ba11-fd7737b014db',
          'description' : '14',
          'price' : '325',
          'priceCurrency' : 'USD'
        },
        {
          '@type' : 'Offer',
          'availability': 'http://schema.org/InStock',
          'sku' : '5c31ce22-2b65-4b30-81c0-2f0a1cd16415',
          'description' : '15',
          'price' : '219',
          'priceCurrency' : 'USD'
        }
      ]
    };
    this.productList.push(pdt3);
    this.productList.push(pdt1);
    this.productList.push(pdt2);
    // this.productList.push(pdt4);
    this.productList.push(pdt5);
    this.productList.push(pdt6);
    this.productList.push(pdt7);
    this.productList.push(pdt8);
    this.productList.push(pdt9);
    this.productList.push(pdt10);
    this.productList.push(pdt11);
    this.productList.push(pdt12);
    this.productList.push(pdt13);
    this.productList.push(pdt14);
    this.productList.push(pdt15);
    this.productList.push(pdt16);
    this.productList.push(pdt17);
    this.productList.push(pdt18);
    this.productList.push(pdt19);
    this.productList.push(pdt20);
    this.productList.push(pdt21);
    this.productList.push(pdt22);
    this.productList.push(pdt23);
    this.productList.push(pdt24);
    this.productList.push(pdt25);
    this.productList.push(pdt26);
    this.productList.push(pdt27);
    this.productList.push(pdt28);
    this.productList.push(pdt29);
    this.productList.push(pdt30);
    this.productList.push(pdt31);
    this.productList.push(pdt32);
    this.productList.push(pdt33);
  }
}
