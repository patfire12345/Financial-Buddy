from flask_login import UserMixin
from . import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(100))

    # Create a string representation of the data entry
    def __repr__(self):
        return f"User(id={self.id}, email={self.email}, name={self.name}"


class Financial(db.Model):
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    credit_score = db.Column(db.Integer)
    savings = db.Column(db.Integer)
    student_loan = db.Column(db.Integer)

    def __repr__(self):
        return f"Financial(id={self.id}, credit_score={self.credit_score}, " \
               f"savings={self.savings}, student_loan={self.student_loan}"

class Scale(db.Model):
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    passive_income_scale = db.Column(db.Integer)
    investment_risk_scale = db.Column(db.Integer)
    debt_scale = db.Column(db.Integer)
    withdrawal_frequency = db.Column(db.String(100))
    def __repr__(self):
        return f"Scale(id={self.id}, passive_income_scale={self.passive_income_scale}, " \
               f"investment_risk_scale={self.investment_risk_scale}, debt_scale={self.debt_scale}" \
               f"withdrawal_frequency={self.withdrawal_frequency}"


class Need(db.Model):
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    need_student_loan = db.Column(db.Boolean)
    need_mortgage = db.Column(db.Boolean)
    need_financial_independence = db.Column(db.Boolean)
    need_save_money = db.Column(db.Boolean)
    need_buy_car = db.Column(db.Boolean)
    need_passive_income = db.Column(db.Boolean)
    need_saveup = db.Column(db.Boolean)
    need_other = db.Column(db.Boolean)


    def __repr__(self):
        return f"Need(id={self.id}, need_student_loan={self.need_student_loan}, " \
               f"need_mortgage={self.need_mortgage}, need_financial_independence={self.need_financial_independence}" \
               f"need_save_money={self.need_save_money}, need_save_money={self.need_save_money},"\
               f"need_buy_car={self.need_buy_car}, need_passive_income={self.need_passive_income},"\
               f"need_saveup={self.need_saveup}, need_other={self.need_other}"