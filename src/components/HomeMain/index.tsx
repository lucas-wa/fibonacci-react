import illustration from "../../assets/images/illustration.svg";
import "./style.scss";


export function HomeMain() {

  let testMain = [];

  for (let i = 0; i < 2; i++) {
    testMain.push(i)
  }


  return (
    <div className="HomeMain">

      <div className="introduction">
        <span className="introductionText">
          <h2>Quem somos?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, at nisi quos eum repudiandae minus aliquam suscipit
            culpa ipsam in animi! Voluptas accusamus repudiandae, odit id
            molestiae neque eius corrupti.
          </p>
          <button>Cadastrar</button>
        </span>

        <img src={illustration} alt="illustration" />
      </div>
      <main>
        {
          testMain.map(
            element => (
              <section key={element}>
                <h2>A ideia</h2>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur commodi porro ut. Nihil necessitatibus aliquid fugiat cupiditate illo cum praesentium corrupti, quibusdam alias quae consectetur, vero ea iusto mollitia.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                  atque laboriosam rerum eaque accusantium ad libero nostrum voluptate
                  aperiam impedit deleniti, asperiores sit perferendis earum iure.
                  Repellat nulla totam illum? */}
                </p>
              </section>
            )
          )
        }

      </main>
    </div>
  )
}