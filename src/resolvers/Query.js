const Query = {
	async allTodos(parent, args, ctx, info) {
		const todos = await ctx.db.query.todoes();
		return todos;
	},

	async eachTodo(parent, args, ctx, info) {
		const todo = await ctx.db.query.todo({
			where: {
				id: args.id,
			},
		});
		return todo;
	},
};

module.exports = Query;
