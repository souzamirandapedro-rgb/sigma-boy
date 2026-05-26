// Pontos iniciais de Aura do usuário
let auraPoints = 1000;

const auraCounter = document.getElementById('auraCounter');
const auraGlow = document.getElementById('auraGlow');

// Função para atualizar os pontos e a resposta visual da aura
function alterarAura(quantidade) {
    auraPoints += quantidade;
    
    // Atualiza o texto na tela de forma formatada
    if (auraPoints >= 0) {
        auraCounter.innerText = `+${auraPoints.toLocaleString()}`;
    } else {
        auraCounter.innerText = `${auraPoints.toLocaleString()}`;
    }

    // Efeito de clique rápido (feedback visual no número)
    auraCounter.style.transform = 'scale(1.15)';
    setTimeout(() => {
        auraCounter.style.transform = 'scale(1)';
    }, 150);

    // Atualiza os efeitos visuais baseado no nível da Aura
    atualizarEfeitoAura();
}

function atualizarEfeitoAura() {
    if (auraPoints >= 3000) {
        // Aura Suprema (Dourada / Roxa Intensa)
        auraGlow.style.boxShadow = '0 0 60px #e0f2fe, inset 0 0 30px #38bdf8';
        auraCounter.style.color = '#38bdf8';
    } else if (auraPoints < 0) {
        // Perda total de Aura (Instabilidade Vermelha)
        auraGlow.style.boxShadow = '0 0 50px #ef4444, inset 0 0 20px #991b1b';
        auraCounter.style.color = '#ef4444';
    } else {
        // Aura Padrão (Roxa / Misteriosa)
        auraGlow.style.boxShadow = '0 0 40px #8a2be2, inset 0 0 20px #4b0082';
        auraCounter.style.color = '#ffffff';
    }
}

// Reset do Mindset
function resetAura() {
    auraPoints = 1000;
    auraCounter.innerText = "+1,000";
    atualizarEfeitoAura();
}
