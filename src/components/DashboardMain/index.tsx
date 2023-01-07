import "./style.scss"

export function DashboardMain(){
    let testMain = [];
  
    for (let i = 0; i < 2; i++) {
      testMain.push(i)
    }
  

    return (
        <main className="DashBoardMain">
        {
          testMain.map(
            element => (
              <section key={element}>
                <h2>Dashboard</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur commodi porro ut. Nihil necessitatibus aliquid fugiat cupiditate illo cum praesentium corrupti, quibusdam alias quae consectetur, vero ea iusto mollitia.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                  atque laboriosam rerum eaque accusantium ad libero nostrum voluptate
                  aperiam impedit deleniti, asperiores sit perferendis earum iure.
                  Repellat nulla totam illum?
                </p>
              </section>
            )
          )
        }

      </main>
    )
}