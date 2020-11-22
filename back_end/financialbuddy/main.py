# main.py

from flask import Blueprint, render_template, request, url_for,flash, redirect
from flask_login import login_required, current_user
from .models import Financial, Scale, Need
from . import db


main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')
    # return "Server is up", 201

@main.route('/financial_questions', methods = ['GET','POST'])
@login_required
def financial_questions():
    if request.method == 'GET':
        return render_template("financial_questions.html")
    else:
        id = current_user.id
        credit_score = request.form.get('credit_score')
        savings = request.form.get('savings')
        student_loan = request.form.get('student_loan')

        if credit_score and savings and student_loan:
            financial = Financial.query.filter_by(id=id).first()
            if financial:
                financial.credit_score = credit_score
                financial.savings = savings
                financial.student_loan = student_loan
            else:
                new_financial = Financial(id = id, credit_score=credit_score, savings=savings, student_loan=student_loan)
                print("New")
                print(new_financial)
                db.session.add(new_financial)
            print("before commit")
            db.session.commit()
            # return "You submitted credit_score-{}, savings-{}, and student_loan-{}".format(credit_score, savings, student_loan)
            return redirect(url_for("main.scale_questions"))
        else:
            flash('fill in all the questions!')
            return redirect(url_for('main.financial_questions'))


@main.route('/scale_questions', methods = ['GET','POST'])
@login_required
def scale_questions():
    if request.method == 'GET':
        return render_template("scale_questions.html")
    else:
        id = current_user.id
        passive_income_scale = request.form.get('passive_income_scale')
        investment_risk_scale = request.form.get('investment_risk_scale')
        debt_scale = request.form.get('debt_scale')
        withdrawal_frequency = request.form.get('withdrawal_frequency')

        if passive_income_scale and investment_risk_scale and debt_scale and withdrawal_frequency:
            scale = Scale.query.filter_by(id=id).first()
            if scale:
                scale.passive_income_scale = passive_income_scale
                scale.investment_risk_scale = investment_risk_scale
                scale.debt_scale = debt_scale
                scale.withdrawal_frequency = withdrawal_frequency
            else:
                new_scale = Scale(id = id, passive_income_scale=passive_income_scale,
                                  investment_risk_scale=investment_risk_scale, debt_scale=debt_scale,
                                  withdrawal_frequency = withdrawal_frequency)
                db.session.add(new_scale)
            db.session.commit()
            # return "You submitted passive_income_scale-{}, investment_risk_scale-{}, debt_scale-{}," \
            #        " and withdrawal_frequency-{}".format(passive_income_scale,investment_risk_scale,
            #                                              debt_scale,withdrawal_frequency)
            return redirect(url_for("main.need_questions"))
        else:
            flash('fill in all the questions!')
            return redirect(url_for('main.scale_questions'))


@main.route('/need_questions', methods = ['GET','POST'])
@login_required
def need_questions():
    if request.method == 'GET':
        return render_template("need_questions.html")
    else:
        id = current_user.id
        need_student_loan = bool(request.form.get('need_student_loan', default="False"))
        need_mortgage = bool(request.form.get('need_mortgage', default="False"))
        need_financial_independence = bool(request.form.get('need_financial_independence', default="False"))
        need_save_money = bool(request.form.get('need_save_money', default="False"))
        need_buy_car = bool(request.form.get('need_buy_car', default="False"))
        need_passive_income = bool(request.form.get('need_passive_income', default="False"))
        need_saveup = bool(request.form.get('need_saveup', default="False"))
        need_other = bool(request.form.get('need_other', default="False"))

        need = Need.query.filter_by(id=id).first()
        if need:
            need.need_student_loan = need_student_loan
            need.need_mortgage = need_mortgage
            need.need_financial_independence = need_financial_independence
            need.need_save_money = need_save_money
            need.need_buy_car = need_buy_car
            need.need_passive_income = need_passive_income
            need.need_saveup = need_saveup
            need.need_other = need_other
        else:
            new_need = Need(id=id, need_student_loan = need_student_loan,
                            need_mortgage = need_mortgage,
                            need_financial_independence = need_financial_independence,
                            need_save_money = need_save_money,
                            need_buy_car = need_buy_car,
                            need_passive_income = need_passive_income,
                            need_saveup = need_saveup,
                            need_other = need_other)
            db.session.add(new_need)
        db.session.commit()
        # return request.form
        return redirect(url_for("main.profile"))


@main.route('/profile')
@login_required
def profile():
    id = current_user.id
    financial = Financial.query.filter_by(id=id).first()
    scale = Scale.query.filter_by(id=id).first()
    need = Need.query.filter_by(id=id).first()

    return render_template('profile.html', name=current_user.name,
                           financial = str(financial),
                           scale = str(scale), need = str(need))