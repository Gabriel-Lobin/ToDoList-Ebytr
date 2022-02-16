const { expect } = require('chai');

const toDoService = require('../services/toDoService');

describe('2 - verifica no service se', () => {
    describe('[Adicinando]', () => {
        it('da erro faltando parametro', async () => {
            const resolve = await toDoService.addNewTaskService().catch((error) => error);

            expect(resolve.status).to.be.equal('400');
            expect(resolve.message).to.be.equal('necessário todos os campos');
        });
    });
    describe('[Atualizando]', () => {
        it('da erro faltando parametro', async () => {
            const resolve = await toDoService.updateTasksService().catch((error) => error);

            expect(resolve.status).to.be.equal('400');
            expect(resolve.message).to.be.equal('necessário todos os campos');
        });
    });
    describe('[Deletando]', () => {
        it('da erro faltando o id', async () => {
            const resolve = await toDoService.deleteTaskService().catch((error) => error);

            expect(resolve.status).to.be.equal('400');
            expect(resolve.message).to.be.equal('necessário o id da task');
        });
    });
});
