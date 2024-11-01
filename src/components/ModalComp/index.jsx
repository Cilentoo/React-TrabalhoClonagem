import { FundoTransparente, ModalContent } from "./style"

export const ModalComp = () => {

    return (
        <FundoTransparente>
            <ModalContent>
                <h2>Entrar</h2>
                <p>Insira suas informações para entrar.</p>
                <input type="text" placeholder="Celular, email ou usuário" style={{ marginBottom: '10px', width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <input type="password" placeholder="Digite sua senha" style={{ marginBottom: '20px', width: '95%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <button style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#1DA1F2', color: 'white', border: 'none', cursor: 'pointer' }}>Entrar</button>
            </ModalContent>
        </FundoTransparente>
    )
}