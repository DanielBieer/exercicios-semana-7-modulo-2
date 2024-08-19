import { useEffect, useState } from "react"

const NewsHeadline = () => {
    const [headline, setHeadline] = useState(null)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias')
                const data = await response.json()

                if (data.items && data.items.length > 0) {
                    setHeadline(data.items[0].titulo)
                } else {
                    setHeadline('Nenhuma notícia encontrada')
                }
            } catch (error) {
                console.error('Erro ao buscar a notícia:', error)
                setHeadline('Erro ao carregar as notícias.')
            }
        }
        fetchNews()
    }, [])

    return (
        <div>
            <h1>Notícia de Destaque do Dia</h1>
            {headline ? <p>{headline}</p> : <p>Carregando...</p>}
        </div>
    )
}

export default NewsHeadline