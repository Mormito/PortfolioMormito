export function FormEmail(){
    return(
        <div className="divBase rsitePallete">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Contate-me!</h3>
             
            <form action="https://getform.io/f/aqoqorra" method="POST" className="w-full lg:w-1/3 h-full sitePallete flex flex-col border-2 rounded-2xl p-5 gap-4 dark:border-darkdefaultBg">
                <input type="text" placeholder="Seu nome" name="name" required></input>
                <input type="email" placeholder="Seu email" name="email" required></input>
                <textarea placeholder="Sua mensagem..."name="message"></textarea>
                <button type="submit" className="border-2 py-1 px-4 font-light rounded-lg cursor-pointer duration-300 ease-in-out
                bg-defaultBg text-defaultText border-defaultText hover:bg-defaultText hover:text-defaultBg
                dark:bg-darkdefaultBg dark:text-darkdefaultText dark:border-darkdefaultText hover:dark:bg-darkdefaultText hover:dark:text-darkdefaultBg">Enviar!</button>
            </form>

        </div>
    );

}