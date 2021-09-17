import "./App.css";
import styled from "styled-components";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="App">
      <h1>React Sidebar</h1>
      <Drawer>
        <DrawerItem
          label="Starred"
          icon="data:image/jpeg;base64,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"
        />
        <DrawerItem
          label="Index"
          icon="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxAPDw8PDw8PEA0PDxANDw8PDw4OFRUWFxUWFhUYHSggGBolGxUVITEiJSkrLi4uFx8zODMsNygtMCsBCgoKDg0OGhAQGi0lHyUtMC0tLy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgcEA//EAEYQAAIBAgEHBgsHAgUEAwAAAAABAgMRBAUGEiExUdETIkFhcZEVFjJSU1SBk6GisQcUQmJyssEjNRdDgsLhktLi8CQlRP/EABoBAAIDAQEAAAAAAAAAAAAAAAADAgQFAQb/xAA4EQACAgACBQkHAwQDAAAAAAAAAQIDBBEFEiExURMyQVNxgZGh4RQiI1JhsdEzcsEkYpLwQqLx/9oADAMBAAIRAxEAPwDuIAIAGAAAAACABgQnNJNtpJK7baSSMZl77QaFG8MMvvFRatJO1GL/AFfi9neNposulq1xzZxyS3mzlJLW9SW1vYZ7KuemBw906vKzW2GHSqO/bfRXtZyzLGcOLxbfLVpOD/y4cymurRW323KpRNyjQfTdLuX5/HiV538Df4/7S6j1YfDxivOrScn/ANMbL4lDis9MoVP/ANDpp9FGMIfG1/iUNgSNSvR+Gr3QXft+4iV0n0nsrZUxM/LxFeXbVnbuueZyb2tvtbYkiSQ9RjHmpLsSQlyYRbWxtdjaPXRyjiIeRXrR/TVml3XPKkTSIyUZb0mLc2txd4XO3H07WxMpLdVUZr4q/wAS7wP2i1lZVqFOoul024S7ndP4GLSBIqWYLDz3wXds+x1YicdzOtZNz0wdaylN0JPorpRV/wBSbXxNDTqRkrxaknrTTumu04NY92Tcq4jDO9GrKG+O2D7YvUZl2iI5Z1S7n+R0Me1smjt4GJyLn5CdoYqPJy2cpC7pvtW2PxNjRqxnFThJTjJXUotNNdTRkXUWUvKayL9d0LFnFn1AQxQwAAAAAAAAAAAAAEMAAQxNgAFRl/L9DBU9OtLnPyKcdc6j6lu63qK7O/OuGBjoQtUxMleMPwwXnT4bWcjx2MqYipKrWnKpUltlJ/Bbl1GpgNGSxHvz2R+/Z+RVlqjsRbZxZ14jHNqT5Kh0Uabdv9T/ABP4FCkTSBI9VVVCqOpBZIpSm3vEkSSGkSsdbFuQkhpE0gsRciDkCRJIEiSRBsU5CSGkNIkkRbIORFImkCRJIhmLchJEkiSQJEMyDkJItMjZar4SV6Uua3zqcruEvZ0PrRXpDSFzjGa1ZLNEVY4vNM6tkHOGji42jzKqXOpyetdaf4kXZxKhOUJKcG4yi7xlF2afUzoma2c6r2o12o1rWjLZGrwl1GDisC6/ehtXmjYwmPVj1J7H5M1IxJjM80hAMAAQDAAEMAABGXz0zojgaehC0sTUXMi9apx8+S3bl0ssc5cswwWHlWnrl5NOHTOo9i7Ol9RxTHYuderOtVlpVKknKT/hbkjU0bgPaJa8+avN/wC7xN1ursW8+derKpKVScnOc25SlJ3cpPeyCQ0idj1exbEUJSIpE0gSGkRchbkCQ0iSQ0iLkQcgSBIdiSRBsg5AkFhpE7EGxbkRSJJDSJpEWxbkQSJJEkiViLYtyEkCRJIaRBsg5CSJpDsNIi2LchJDjq1rU1rT3MaRJIg2Lcjf5p5w8slQrP8ArRXNl6WK/wBxqjjMJOLUotqSaaa2po6Zm3lhYqlzrKrDVUW/dJdTMTGYZQevHc/I9Bo7Hcp8Kb95bvr6l0AkMomsAAAABCpNRTbaSSbbepJImYv7Sss8jQWGg7VMQnpW2qivK79neNpqldYq472RnLVjmYjO/LjxuJck/wCjTvCivy9Mu127rFGkNIaR7WqEaoKEdyMuU23mxWJJDSJJEmxTkCQ7BYmkQbFuRFIaRJIdiDZByEkSSGkTSIuQtyIJE0hpEkiGYtyIpErEkgsRbISkCQ0hpEkiLYtyEkOw7EkiDYtyEkSSGkNIi2RchJEkiSQ0iGYpyFY9uScfLDVo1Y7FqnHzodKPLYBckmsmcjZKElKO9HW8PXjUhGcHeMkmmtx9UY7MjKeuWGk986d+3nL+TYowra3XNxZ7TCXq+pTXf2jAAFlkhKVk29SW17jiOcuU3i8VVrX5rejTW6nHVHv2+1nUM+cofd8DVadp1bUYb7yvf5VJ+w4+kbuhqeda+xfz/BRxlmWUSKQ0iSQ0jdzKDkKxOMb/APAJG9+y+CtiZWV1ySv025zsVcXiORrc8sztUeUnq55GD0HufcySg9z7mdrwuPhXpueHlCrtstK3O3PVePcZ7KOeNTDT0K2CnB67PlVozW+L0dZmw0lbZLVjXt4Z/kdPCwgs5T2dhzfk3ufcPQe59zN9/iFH1WXvV/2j/wAQY+qv3q/7RvtOJ6rzEcnR1vkYLQe59zJKD3PuZvP8QI+rP3q4B4/x9VfvFwI+0YnqvMhyWH63yMLoPc+4ag9z7jdeP0fVX7yPAfj5H1Z+8jwOe0YjqvMjyOH63yMMoPc+4ag9z7jc+PkfVn72PAPHyPqz94uBH2jEdX5kHThuu8jEKD3fBklB7n3M23j1H1Z+8XAfjxH1Z+9XAi77+r8yDowvXeRiVB7n3ElB7n3G18d4+rP3q4B47R9WfvVwOcvf1fmRdGF67/qzGKD3PuGoPd8Db4bO11ZKFPCSnJ9EaseGov8A7yoU+UrqNLpactJR9ttYmeMnF5Sh5jatG1XLOFuaX9uzzOVaIzcZ5ShPCU6kbNOcHB9OjJX4GHHU3cpHWyyM7GYb2ezU1s9mYAADCqfbB4l0qkKkdsJKXauld31OqYWuqkIzjsnFSXYzkpu8x8bp0JUm9dGVv9MrtfyvYUsbDOKlwNvQt2rZKp9O3vNMAAZp6U5x9qGMvUoUFsjGVWXa+avgn3mHSL/PfEcpj6+6GhTX+mKv8WyjSPWYGGph4L6Z+O0xMRPOxkUiSQ0iSRZzKzkJI3/2YeTie2j9JGCSN99mS5uJ7aX0kZ2kn/Ty7vuPwb+MjF4TGVaFTlKU5Qkm9cXtV9jXSu02eTs7aGJhyGPpxV7LTtek+t9MX1/Qw8lrfaxpE7cPXdFay25b1vEwxU6m8t3DoNfljMvVyuCkqkGtJU3JN2/JLp9veZOrSlCTjOLjJampJpp+0sMj5ar4R/0p8zppz1wfD2GupZQwOU4qFeKpVtkW3oyv+SfT2PuK3K34dfE96PFb12k3GnEfpvVlwe59hgUhpGgyzmnXw95Q/rUvOiufFfmivqiiSLMLo2LWi8yjbXOqWU1kRSJJDSJJEsyu2JIaRJIdiDkLchJDSJJFvkjIFbE2aXJ0/Pmnr/SukXOxQWcnkdhXO2WrBZsqYwbaS1t7EtbZpMk5p1Klp13yUNuj/mNdfmotP/hZNXpK9v1VL/SKM7lbL1bE3TehT6KcNntfSU+Vst2VrJcWXuQowu2960vlX8svsRlzDYOLpYSClLpa8i/XLbJmVyhlCrXlpVZuW5bIx7EeYTGV0xht3viypiMbbetV7I8FsRss4/7bh+yh+xmPNhnF/bcN2UP2sxovC/p97LGlf1l+1DIgwLJnDL7MrE6GK0OirCUfata/kz56sl1+TxFGfm1I37G7P4Niro60Gh+Fsdd0JfVHWQI6SAxcme11lxOJZVqaeIrz86rVfzOx5kiU3dt7233kkj2Mfdio/RHnZTzbZFIaQ0iSQNiWwSN39mi5uJ7aP0kYVI3f2b+Tie2l9JGfpF/Afd9yzgH8dd/2MNJa32saRJrW+1gkWk9iKMpbQSGkNIkkRbFORfZFzprYe0J3rUt0nz4rql/DNBVyThco0+Xo3pTd1pKLXOXnR2PtXeZ3NzIEsVLSleNCL50tjm/NjxLXOHL6pr7thHoKHNlOnq0fyx/lmVdFcrlTsl0vo7zWoscaHLEbYdCe99hQZVyNWwz/AKkebfVUjrg/b0e08KRq8l52auTxcFODVnNR12/NHp9h6MdmzRrx5XBTir69C/MfZ5o1YmVb1bll9VuKk8JG1a2Gln/a967OJjUj2ZPydVxEtGlBy3y2Rj2s0WTc1FBcpjJqMVrcFJJL9UuBPH50U6UeSwcIpLVp6NoL9MentOSxLk9WpZ/XoIRwKrjr4mWquG+TPvhcg4fBw5bEyVRxtti9BPoSj0srMr51VKl4UFyUNl/xyX+09WQs4FUvh8XaSndKclqd/wAMu/UytziyFLDS04XlRk9T2uD3PiIhFcpldv6OHcWr7H7OpYTZD/llzl2lM227vW3tb2sixgXzCAi2AM4Bss4v7Zhuyh+xmNubLOP+2YbsoftMaVcJzO809K/rL9qExXACzmZyGLStr3awIs4dOgeFHvXeMxf31/8AtwKvs6L/ALbIpXCza3NoEj15QpaNarHzatRd0medI24zzSZKbyeQkiSRJIEiLkKchWNz9nHk4ntpfSRiUjb/AGd+TiO2n/uKWPfwX3fct6Pf9Qu/7GKa1vtYJE5LW+1jSHp7EZ0pbWRSLzNzIMsVLTneNCL50tjm/Nj/ACx5uZBlipacrxoRfOl0ze6P8stM4suxhH7rhbRjFaMpx2JebHiU7rpSfJ17+l8C5RRCMOXv5vQvmYs4suxhH7rhbRjFaM5Q1JLzY/yzKWGkMnVXGuOSKWJxU7560u5dCBI9OBx1WhLTpTcX07n2rpPMBNpNZMRGcovNPJnsyjlOtiHerNtLZFaor2HjGI4kkskdlKU3nJ5sTNTm7l9OP3bE2lCXNhOetW82XV1mWAXZXGxZMdh8ROietHw4ovM5MhPDPlKd5UJPbtdNvYn1bmUZp83M4EksNiXpU5LRjOWuy2aMuo8mcmb7w7dWlzqD76bfQ+rrE12OL5Ozf0PiW8RhoWQ5ejd0rpj6FDcLgJllmabTOP8AtmG7MP8AtMYbLOP+2YfsoftZiyrheZ3s09KfrL9qAGIRZzM0YNiFtOHUtp6/ur3MZsvBf5fqBX9oRf8AYZGSzsw+hja686SmuyST+typSNd9oeEtWpVUtU4OD/VF6vg/gZRIv4WzWpi/p9ieMjqXSX1+4kiSQ0hqI1yKbkJI232eeTiO2n9JGNSNn9n/AJOI7aX0ZSxr+E+4uaNf9Su/7GNa1vtZd5uZBliZac7xoxfOl0ze6P8ALHm9kGWJnpzvGjFvSl59nsXEss4cuRhH7rhbRjFaM5Q1JLzY8SFl0n8Ovf0vgFOHjBO+/m57F0yf4FnDlyMI/dcLaMYrRlOGxJfhi/qzKgAyutVxyX/pRxOKliJ60u5cBiAVyYgYARACREZFsDo7iuAHDuQzTZt5xKK+74l6VJ82M561BbpX/D19BmCIuyCsWTH4e+dE9aHo/ozQ5y5vPD3q0U5UHtS1un/49ZnjTZtZw6CWHxD0qMubGUtehfoe+P0+nzznzedC9ajzqD1tLW6fGP0EwslF6lnc+Jbvw8LYO+jd0x4Mss5f7Zh+zD/sMUbXOR//AFmG7KH7TEhhuZ3sNKbbl+1AMQFgzhHpybR5SvRh51SC9l1f4XPKaDMnDaeLjLopRlN9r1L6i7JZQbH4avXtjHi0dH0UIekBj5ntOSRQ554PlcJKSXOpNVV2K6l8G+45wkdkqQUk4vWmmmt6ZyjKWCdCtUpP8D1dcXri+5o1NH2bHB9pg6ZqycbF07DypAkNInYv5mE5CSNlmAtVftpfRmOPrh8TOm26c5wb1PQk43XsEXwdkNVD8HiVRcrGs8v5OiZUwNaVJUcM4UoNNSeuLUd0bLUZ3xLr+lp/NwKTwrifWKvvJcR+FcT6xV95PiVq6LoLKMl4ehfvxuEvkpThLxLrxLr+kpfPwF4lV/SUvn4FL4WxPrFX3k+IeFsT6xV95LiT1cR8y8PQRyuA6uX+XqXXiVX9LS+fgHiVX9LS+fgUnhbE+sVfeT4h4XxPrFX3k+Iat/zLw9DvKaP6uX+XqXfiVX9LS+bgLxKrelpfNwKTwvifWKvvJ8Q8L4n1ir7yfENW/wCZeHoHK4Dq5f5epd+JOI9NS+fgLxIxHpaXz8Cl8L4n1ir7yfEXhfE+sVfeT4kdS/5l4eh3lcB1cvH1LrxIr+lpfPwH4k4j0tL5+BR+F8T6xV95PiHhfE+sVveT4g43/MvAOUwHVy8S78SMR6al8/APEfEelpfPwKTwvifWK3vJ8ReGMT6zW97Pic1b/mXgHKYDq5ePqXniPiPS0vn4GgyDkzEUIulWnCrStaK1uUV0x1rXEwfhjE+s1vez4i8M4n1mt72fEhOq6aybXh6D6cXhKZa0IST7fU2OfFNQwcIxSjGNSmklsUUmjAH3xONq1bKpVqVEtaU5yaT6rnwHU1uEcmU8biI4i3XisllltEMQmMKgze/Z/gtGjUrNa6slGP6IXX1b7jCUKMqk40465TlGK7W7fydeyfhVRpQpR2Qio9tukq4ueUdXibGh6dax2PctneekBgZ56QDJZ8ZN0oxxEVrhzZ9cOh+x/U1p8q1KM4yjJXjJOLT6U0Trm4SUkIxNKurcH0/6jkdgPdlrJ0sNWlTfk7YPzof8HhNuM1JJo8ROuUJOMt6AYgOkQAQgAYhXC4HRsiMDh3IVxiEGYAIAInQEAwAQ7iEcOgAhAAxXARw6MQH3yfg516sKUFzpu3VFdLfUjjeW07GLk0lvZpswsl6dSWJkubTvGnfpm9r9i1e03yPLk7BwoUoUoLmwVutvpb629Z6zKsnryzPY4TDqipQ8e0AABZZEgYwACozhyUsTSsrKpG7py69z6mc2q03CTjJOMotqSe1NHX7GazpyByydakv6sVzoqy5SPEt4a/UerLd9jH0pgOVXKQXvLf8AVGEIg+621PoYjTzPMAAhgAgADh3IAIgB0BABwBkQGcABAIDoAIVzgDAQgzOjEMicDIkdGzQyH93p8pUX9aotaf8Alw83iV2Z+bnk4mvHrpU5LZ+Zr6I21ihiLs/dieh0ZgdT4s9/QuH17QQwAqm0AAAAAAAAAmMAAy2cmbarXrUElV/FHYqnCRhakHFuMk1JOzTVmnuZ2MpMuZAp4paXkVUtU109Ul0ot0Ylw92W4xsfoxWN2VbJdPBnNhHrynkyrhpaNWNvNktcJdjPE2aKkms0ednCUJaslkyREQHcyIDAREAAQgOjEIDh0BAIAGMRE4GRICLPRgMDVxE1CjBzl022RW9voRxvLeTjFyeSWbPObfNbNSzjXxMd0qdJ9G5y4Flm7mtDDWqVLVK22/4Ifp6+s0iKN2Iz92JvYLRmp79u/oXDt+okiQAVTaAAAAAAAAEMAAAAAAAFYYAB8MRh4VIuFSKnF7VJXRkMr5mPXPDS6+TqN/CXE2wrE4WSg/dZXvwtV6ymu/pOPYvCVKMtGrCUH+ZNJ9j2P2HwOxYjDQqRcakYzi+iSTRnsdmZh53dKUqL3Lnw7n/DLsMWnzlkYl2hpx21vPt2M5+RNFjMzsVDyNCqvyvRfc+JU4nJWIp+XQqR69CTXetQ9WwluZnWYW6vnRfgeMVwlq26n16hXJ5iMsgC4CWs5mCWYDPTQyfXqeRRqS7ISt37C1wmZ+LqW0oxpLfUlG/crkJWRjvY6vDW2c2LfcZ8+lChOpJRpwlOT/DBNv4G6wGY1GNnXqSqvzYrk4fW77zTYTA0qMdGlCFNflilft3leeKX/E06dD2y22PL7/j7mJyRmVUlaWJlycfRw1zfa9iNrgcBSoQUKUFCK3bX1t7W+09VhlSdkp7zZowlVC9xbePSKwwAgWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCWxiA4g4mdy1tftMNlLa+3+RgaNG48rj+ezz4PyjbZG6BgTu5pHBc41kNgMAMx7z1ceaC6CQAAIAAAOgAAAAAAAAAAAAAAAH/2Q=="
        />
        <DrawerItem
          label="Send email"
          icon="data:image/png;base64,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"
        />
        
        <DrawerItem
          label="Drafts"
          icon="data:image/png;base64,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"
        />
        <DrawerItem
          label="All Mail"
          icon="data:image/png;base64,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"
        />
        <DrawerItem
          label="Trash"
          icon="data:image/png;base64,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"
        />
        <DrawerItem
          label="Drafts"
          icon="data:image/png;base64,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"
        />
      </Drawer>
    </div>
  );
}
function DrawerItem({ label, icon }) {
  console.log(label, icon);
  return (
    <div
      style={{
        height: "60px",
        width: "300px",
        margin: "10px auto",
        
      }}
    >
      <img
        style={{
          height: "30px",
          width: "30px",
          float: "left",
          margin: "20px",
        }}
        src={`${icon}`}
        alt=""
      ></img>
      <h4
        style={{
          marginLeft: "-50px",
        }}
      >
        {label}
      </h4>
    </div>
  );
}

export default App;
