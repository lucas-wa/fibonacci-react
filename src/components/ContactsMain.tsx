export function ContactsMain(){

    let testMain = [];
  
    for (let i = 0; i < 2; i++) {
      testMain.push(i)
    }
  

    return (
        <main>
        {
          testMain.map(
            element => (
              <section key={element}>
                <h2>Contatos</h2>
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