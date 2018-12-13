### 一、图片懒加载 lazysizes 
  1、无响应默认加载
  >`<img data-src="img.jpg" class="lazyload"  width="500" height="500"/>`

  2、从模糊到清晰的加载：
  >`<img src="vague.jpg" data-src="clear.jpg" class="lazyload" width="500" height="500"/>`

  3、响应式加载：
  >`<img
    data-sizes=”auto”
    data-src=”image2.jpg”
    data-srcset=”image1.jpg 300w,
    image2.jpg 600w,
    image3.jpg 900w” class=”lazyload” />`

### 二、时间工具moment
  >`moment().format("YYYY-MM-DD HH:mm:ss");
    day=moment(毫秒级时间戳)|| moment.unix(秒级时间戳)||moment('2017-06-12','YYYY-MM-DD')`

### 三、解析与格式化url querystring
  1.querystring.parse(str[, sep[, eq[, options]]])
  > `str <string> 要解析的 URL 查询字符串。`<br/>
    `sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'` <br/>
    `eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='`
  
  2.querystring.stringify(obj[, sep[, eq[, options]]])
  >`obj <Object> 要序列化成 URL 查询字符串的对象。`<br />
    `sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。`<br />
    `eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='。`

### 四、数据处理 lodash
  > `import _ from 'lodash'`